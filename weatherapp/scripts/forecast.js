const key = 'JSmzQj2iGbTQD8CEcYom458atb7DBI6K';

// get weather info

    
const getWeather = async (id) => {

  

  const base='http://dataservice.accuweather.com/currentconditions/v1/';
  const query=`${id}?apikey=${key}`;
   const response = await fetch((base + query));
   const data = await response.json();
   return data[0];


}
//Get City info
const getCity = async(city) => {

  const base='http://dataservice.accuweather.com/locations/v1/cities/search';
  //const query = '?apikey='+key+'&q='+city ;
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
}

// getCity('Tampere')
//   .then(data =>  {return getWeather(data.Key);})
//   .then(data => console.log(data))
//   .catch(err => console.log("error"));
