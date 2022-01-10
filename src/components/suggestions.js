import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { autocomplete } from '@algolia/autocomplete-js';
import { connectAutocomplete } from 'instantsearch.js/es/connectors';


// Instant Search Widgets
import { hits, searchBox, configure } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';


/**
 * @class 
 * @description Instant Search class to display content in the page's te
 */
 class Suggestions {
  /**
   * @constructor
   */
  constructor() {
    this._init();
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }
  _init() {
    this.autocomplete = connectAutocomplete(
      ({ indices, refine, widgetParams }, isFirstRendering) => {
        const { container, onSelectChange } = widgetParams;
    
        if (isFirstRendering) {
          container.html('<select id="ais-autocomplete"></select>');
    
          container.find('select').selectize({
            options: [],
            valueField: 'query',
            labelField: 'query',
            highlight: false,
            onType: refine,
            onBlur() {
              refine(this.getValue());
            },
            onChange(value) {
              refine(value);
              onSelectChange({
                query: value,
              });
            },
            score() {
              return () => 1;
            },
            render: {
              option({ query }) {
                return `
                  <div class="option">
                    ${query}
                  </div>
                `;
              },
            },
          });
    
          return;
        }
    
        const [select] = container.find('select');
    
        select.selectize.clearOptions();
        indices.forEach(({ results }) => {
          results.hits.forEach(hit => select.selectize.addOption(hit));
        });
        select.selectize.refreshOptions(select.selectize.isOpen);
      }
    );
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(process.env.APP_ID, process.env.API_KEY);

    this._searchInstance = instantsearch({
      indexName: 'spencer_williams_data_query_suggestions',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        hitsPerPage: 3,
      }),
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#autocomplete-suggestion',
        templates: { item: autocompleteProductTemplate },
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default Suggestions;


// const searchClient = algoliasearch(process.env.APP_ID, process.env.API_KEY);

// const querySuggestionsPlugin = createQuerySuggestionsPlugin({
//   searchClient,
//   indexName: 'spencer_williams_data_query_suggestions',
// });



// class Suggestion {
//     constructor() {
//         this.init();
//     }
//     init(){
//         this.searchClient = algoliasearch(process.env.APP_ID, process.env.API_KEY);
//         this.querySuggestionsPlugin = createQuerySuggestionsPlugin({
//             searchClient,
//             indexName: 'spencer_williams_data_query_suggestions',
//             getSearchParams({ state }) {
//                 return { hitsPerPage: state.query ? 5 : 10 };
//               },
//               categoryAttribute: [
//                 'instant_search',
//                 'facets',
//                 'exact_matches',
//                 'categories',
//               ],
//               itemsWithCategories: 2,
//               categoriesPerItem: 2,
//           });
//           this.autocomplete = autocomplete({
//             container: '#autocomplete-suggestion',
//             plugins: [querySuggestionsPlugin],
//             openOnFocus: true,
//           });
//     }
// }
// export default Suggestion;

//const suggestions = instantsearch({
//     indexName: 'instant_search_demo_query_suggestions',
//     searchClient,
//   });
  
//   suggestions.addWidgets([
//     instantsearch.widgets.configure({
//       hitsPerPage: 5,
//     }),
//     autocomplete({
//       container: $('#autocomplete'),
//       onSelectChange({ query, category }) {
//         // eslint-disable-next-line
//         search.helper
//           .setQuery(query)
//           .removeDisjunctiveFacetRefinement('categories');
  
//         if (category) {
//           // eslint-disable-next-line
//           search.helper.addDisjunctiveFacetRefinement('categories', category);
//         }
  
//         // eslint-disable-next-line
//         search.helper.search();
//       },
//     }),
//   ]);
// class Suggestions {
//     constructor() {
//         this.query();
//     }
//     query(){
//         const client = algoliasearch(process.env.APP_ID, process.env.API_KEY);
//         const querySuggestionsPlugin = createQuerySuggestionsPlugin({
//             client,
//             indexName: 'spencer_williams_data_query_suggestions',
//             getSearchParams({ state }) {
//               return { hitsPerPage: state.query };
//             },
//         });
//         autocomplete({
//             container: '#autocomplete-suggestion',
//             plugins: [querySuggestionsPlugin],
//             openOnFocus: true,
//         });
//     }
    
// }

// export default Suggestions;

