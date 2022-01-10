import Autocomplete from './components/autocomplete';
import DataUpload from './components/dataupload';
import Suggestions from './components/suggestions';

require('dotenv').config()


class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
    this._dataUpload();
    this._suggestion();
  }

  _initSearch() {
    this.autocompleteDropdown = new Autocomplete();
    
  }
  _dataUpload() {
    this.DataUpload = new DataUpload();
  } 
  _suggestion() {
    this.Suggestions = new Suggestions();
  }

  _registerEvents() {
    const autocomplete = document.querySelector('.autocomplete');
    const searchbox = document.querySelector('#searchbox input');

    searchbox.addEventListener('click', () => {
      autocomplete.style.display = 'block';
    });

    searchbox.addEventListener('blur', () => {
      autocomplete.style.display = 'none';
    });
  }
  
}

const app = new SpencerAndWilliamsSearch();
