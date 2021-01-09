import React, {useState, useEffect} from 'react';

function Weather() {

    
    const [ip, setip] = useState("");
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {

        // function getLocation() {
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(showPosition);
        //     } else {
        //         console.log("No location found");
        //     }
        // };

        // function showPosition(position) {
        //     var lat = position.coords.latitude;
        //     var lon = position.coords.longitude;


            const fetchIp = async () => {
                const urlIp = "https://api.ipify.org?format=json";
                const resIp = await fetch(urlIp);
                const ipJson = await resIp.json();
                console.log(ipJson.ip);
                var ipAddress = ipJson.ip;
            
            
            const fetchCity = async () => {
                const urlCity = "https://ipapi.co/"+ ipAddress +"/json/";
                const result = await fetch(urlCity);
                const cityJson = await result.json();
                console.log(cityJson);
                setip(cityJson);
                setSearch(cityJson.city);
            };
            fetchCity();   
        };
            fetchIp();
                    
        // }

        // getLocation();
    
            //https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+ lat +"&longitude="+ lon +"&localityLanguage=en
    },[] )
    
    

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=3bb1772cd4e94b8cb60145737210801&q=${search}`;
            const response = await fetch(url);
            const dataJson = await response.json();
            console.log(dataJson);
            setCity(dataJson.current);
        };

        fetchAPI();
        
    },[search] )



    




    // fetch("https://api.ipify.org?format=json")
    // .then(result => result.json())
    // .then(ipData => console.log(ipData.ip));
    

    return (
        <>
           
            <h2>{ip.city}</h2>
            <h2>{ip.country_name}</h2>
            
            <div>
           
                <input type="search" onChange={(event) => {
                    setSearch(event.target.value)
                }}/>
                
                
            </div>
         {!city ? (
             <p>No city found</p>
         ) : (
             
            <div>
                {/* <h2>{city.name}</h2> */}
                <h1>{city.temp_c}</h1>
                <h1>{city.uv}</h1>
            </div>
            
            )

         }
        </>
    )
}

export default Weather;
