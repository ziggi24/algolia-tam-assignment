import algoliasearch from 'algoliasearch';
import data from '../../data/products.json';

class DataUpload {
  constructor() {
    this.upload();
  }

  upload() {
    // Create an instance
    const client = algoliasearch(process.env.APP_ID, process.env.API_KEY);
    const index = client.initIndex('spencer_williams_data');
    if(data.length < 10000) { //simulating a check to see if data has changed. Currenly just stopping it from posting over and over. 
      index.saveObjects(data).then( () => {
        console.log('Data successfully uploaded to Algolia');
      });
   }
  }
}
export default DataUpload;