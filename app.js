const yargs = require('yargs');
const geocode = require('./utils/geocode');
const weatherReport = require('./utils/weatherReport');

const name_of_place = yargs.argv._[0];

if(!name_of_place){
  console.log('Please provide name of place');
}
debugger;

geocode(name_of_place,(error,data)=>{
  if(error){
    console.log('There was an issue in retrieving location details.Plese try later.');
  }
  console.log("latitude,longitude", data.latitude,data.longitute);
  
  weatherReport(data, (error, weatherData)=>{
    if(error){
      console.log('There was an issue in retrieving weather details for ' 
                  + data.latitude + ',' + data.longitute + '.Plese try later.');
    }
    console.log(name_of_place + ' - ' +weatherData.currently.summary + '. Current temperature is '
            + weatherData.currently.temperature +'. And it feels like '  
            + weatherData.currently.apparentTemperature);
  });
});