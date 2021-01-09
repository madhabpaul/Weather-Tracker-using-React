import React, {useState, useEffect} from 'react';

function Weather() {

    
    const [ip, setip] = useState("");
    const [ipName, setipName] = useState("");
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {

        // function getLocation() {                                          //fetch location using geoloction
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
                // console.log(ipJson.ip);
                var ipAddress = ipJson.ip;
            
            
                const fetchCity = async () => {
                    const urlCity = "https://ipapi.co/"+ ipAddress +"/json/";
                    const result = await fetch(urlCity);
                    const cityJson = await result.json();
                    // console.log(cityJson);
                    setip(cityJson);
                    setSearch(cityJson.city);
                };
                    fetchCity();   
            };
                fetchIp();
                    
        // }
        // getLocation();

    },[] )
    
    

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=3bb1772cd4e94b8cb60145737210801&q=${search}`;
            const response = await fetch(url);
            const dataJson = await response.json();
            console.log(dataJson);
            setipName(dataJson.location);
            setCity(dataJson.current);
        };

        fetchAPI();
        
    },[search] )


    return (
        <>
           
            <p><b>Your current location is</b> {ip.city}, {ip.region}, {ip.country_name}. <b>Timezone</b> {ip.timezone}. <b>Your IP Address </b>{ip.ip}</p>
            
            <div>
           
                <input type="search" onChange={(event) => {
                    setSearch(event.target.value)
                }} placeholder="Search City"/>
                
            </div>
         {!city || !ipName ? (
             <p>No city found</p>
         ) : (
             
            <div>
                <h2>{ipName.name}</h2>
                <p><b>Current Temperature </b>{city.temp_c} Celsius <b>Condition</b> {city.condition.text} <img src={city.condition.icon} alt="icon" /> <b>UV</b> {city.uv}</p>
            </div>
            
            )

         }
        </>
    )
}

export default Weather;
