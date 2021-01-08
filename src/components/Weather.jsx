import React, {useState, useEffect} from 'react';

function Weather() {

    
    const [ip, setip] = useState("");
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("No location found");
            }
        };

        function showPosition(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            
            const fetchIP = async () => {
                const urlIP = "http://api.positionstack.com/v1/reverse?access_key=1f63ad10c4556f2df30be77ab4328acd&query="+ lat +","+lon;
                const result = await fetch(urlIP);
                const ipJson = await result.json();
                console.log(ipJson);
                setip(ipJson.data[0].locality);
                setSearch(ipJson.data[0].locality);
            };

        fetchIP();
            
        }

        getLocation();
    //https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en
    
    },[ip] )
    
    

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
            
            <h2>{ip}</h2>
            
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
