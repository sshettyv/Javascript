 
console.log('this is the src js')

if('geolocation' in navigator) {
    console.log('geolocation is available');
    
    navigator.geolocation.getCurrentPosition( async(position) => {
     
            const lat =  position.coords.latitude;
            const lon =position.coords.longitude;
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = lon;
            const data = {lat,lon};
            const options = {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data) 
            };
            const res = await fetch('/api',options);
            const fetchData = await res.json();
            console.log(fetchData);
            });
  } else {
    console.log('geolocation is not  available')

  }