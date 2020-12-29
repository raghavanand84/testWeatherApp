const request = require('request');

const geocode = (address, callback)=>{    
    baseUri = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
      let requestparams = {
        uri:baseUri+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFnaHUxMSIsImEiOiJja2lycGVxdG4yNzByMnlsYnZrZnhmcDd0In0.CCEiZTaV2C1Std4ij-dT3A',
        json:true, 
        query:{
          access_token: "pk.eyJ1IjoicmFnaHUxMSIsImEiOiJja2lycGVxdG4yNzByMnlsYnZrZnhmcDd0In0.CCEiZTaV2C1Std4ij-dT3A"        
        }};
        request(requestparams, (error,response,body)=>{
            if(error){
                callback(error, data);
            }else{
                callback(error, {
                    latitude:body.features[0].center[1],
                    longitute:body.features[0].center[0]
                });
            }
        });
  }

  module.exports = geocode;