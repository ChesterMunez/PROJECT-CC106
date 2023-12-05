const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e73e03a2b6msh6919b8eb9a91cf9p16d9eejsn0818b225fc92',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

getdata=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        
        temp.innerHTML= response.temp,
        
        wind_speed.innerHTML= response.wind_speed,
            // "feels_like": 15,
            humidity.innerHTML= response.humidity,
            // "min_temp": 16,
            // "max_temp": 16,
            // "wind_degrees": 270,
            // "sunrise": 1671673206,
            // "sunset": 1671710333,
            // cloud_pct.innerHTML= response.cloud_pct,
        console.log(response)
        if(temp.innerHTML===null) {
            console.log("enter the valid city");
        } else {
            
        }
    })
	.catch(err => console.log(err+"an error has ocuured"));
}


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=caloocan', options)
	.then(response => response.json())
	.then(response => {
        
        caloocan_temp.innerHTML= response.temp,
        
        caloocan_wind_speed.innerHTML= response.wind_speed,
            // "feels_like": 15,
            caloocan_humidity.innerHTML= response.humidity,
            // "min_temp": 16,
            // "max_temp": 16,
            // "wind_degrees": 270,
            // "sunrise": 1671673206,
            // "sunset": 1671710333,
            // cloud_pct.innerHTML= response.cloud_pct,
        console.log(response)
        if(temp.innerHTML===null) {
            console.log("Enter the valid city");
        } else {
            
        }
    })
	.catch(err => console.log(err+"an error has ocuured"));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=quezon', options)
        .then(response => response.json())
        .then(response => {
            
            quezon_temp.innerHTML= response.temp,
            
            quezon_wind_speed.innerHTML= response.wind_speed,
                // "feels_like": 15,
                quezon_humidity.innerHTML= response.humidity,
                // "min_temp": 16,
                // "max_temp": 16,
                // "wind_degrees": 270,
                // "sunrise": 1671673206,
                // "sunset": 1671710333,
                // cloud_pct.innerHTML= response.cloud_pct,
            console.log(response)
            if(temp.innerHTML===null) {
                console.log("enter the valid city");
            } else {
                
            }
        })
        .catch(err => console.log(err+"an error has ocuured"));

    

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bulacan', options)
            .then(response => response.json())
            .then(response => {
                
                bulacan_temp.innerHTML= response.temp,
                
                bulacan_wind_speed.innerHTML= response.wind_speed,
                    // "feels_like": 15,
                    bulacan_humidity.innerHTML= response.humidity,
                    // "min_temp": 16,
                    // "max_temp": 16,
                    // "wind_degrees": 270,
                    // "sunrise": 1671673206,
                    // "sunset": 1671710333,
                    // cloud_pct.innerHTML= response.cloud_pct,
                console.log(response)
                if(temp.innerHTML===null) {
                    console.log("enter the valid city");
                } else {
                    
                }
            })
            .catch(err => console.log(err+"an error has ocuured"));
        

       

            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=marikina', options)
                .then(response => response.json())
                .then(response => {
                    
                    marikina_temp.innerHTML= response.temp,
                    
                    marikina_wind_speed.innerHTML= response.wind_speed,
                        // "feels_like": 15,
                        marikina_humidity.innerHTML= response.humidity,
                        // "min_temp": 16,
                        // "max_temp": 16,
                        // "wind_degrees": 270,
                        // "sunrise": 1671673206,
                        // "sunset": 1671710333,
                        // cloud_pct.innerHTML= response.cloud_pct,
                    console.log(response)
                    if(temp.innerHTML===null) {
                        console.log("enter the valid city");
                    } else {
                        
                    }
                })
                .catch(err => console.log(err+"an error has ocuured"));
            


        
document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault();
    getdata(document.getElementById("city").value)

})

getdata("Caloocan")