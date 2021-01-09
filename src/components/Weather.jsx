import React, {useState, useEffect} from 'react';
import  "./style/Weather.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DnsIcon from '@material-ui/icons/Dns';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    margin: {
        margin: theme.spacing(1)
      },
      withoutLabel: {
        marginTop: theme.spacing(3)
      },
      textField: {
        width: "25ch"
      }
  }));


function Weather() {
    const classes = useStyles();
    
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

            
            
                const fetchCity = async () => {
                    const urlCity = "https://freegeoip.app/json/";
                    const result = await fetch(urlCity);
                    const cityJson = await result.json();
                    // console.log(cityJson);
                    setip(cityJson);
                    setSearch(cityJson.city);
                };
                    fetchCity();   
            
               
                    
        // }
        // getLocation();
        //https://ipapi.co/"+ ipAddress +"/json/
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
           <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
            <div style={{ width: '100%' }}>
                <Box component="div" display="inline" p={1} m={1} >
                    <LocationOnIcon fontSize="small" style={{ color: 'green' }}/> {ip.city}, {ip.region_name}, {ip.country_name} 
                </Box>
                <Box component="div" display="inline" p={1} m={1} >
                    <QueryBuilderIcon fontSize="small" style={{ color: 'blue' }}/> {ip.time_zone}
                </Box>
                <Box component="div" display="inline" p={1} m={1} >
                    <DnsIcon fontSize="small" style={{ color: 'red' }}/> {ip.ip}
                </Box>
            </div>
            <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Search City</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    
                    onChange={(event) => {
                    setSearch(event.target.value)
                }}
                    startAdornment={<InputAdornment position="start"><LocationCityIcon fontSize="small" style={{ color: 'purple' }}/></InputAdornment>}
                />
            </FormControl>
            
         {!city || !ipName ? (
            <Typography variant="h5" component="h2" gutterBottom>
                No city found
            </Typography> 
         ) : (
             <div>
            <Typography variant="h3" component="h2" gutterBottom>
                {ipName.name}, {ipName.country}
            </Typography>
                        
            <Grid container>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Temperature</b> <br /> {city.temp_c}&#176; C<br />{city.temp_f}&#176; F
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Feels Like</b> <br /> {city.feelslike_c}&#176; C<br />{city.feelslike_f}&#176; F
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Humidity</b> <br /> {city.humidity} 
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Cloud</b> <br /> {city.cloud}
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Wind Direction</b> <br /> {city.wind_degree}&#176; {city.wind_dir}
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Wind Speed</b> <br /> {city.wind_kph} Kmph <br />{city.wind_mph} Mph
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>Visibility</b> <br /> {city.vis_km} Km <br />{city.vis_miles} M
                </Box>
                <Box
                    boxShadow={3}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '5rem' }}
                >
                   <b>UV</b> <br /> {city.uv}
                </Box>
            </Grid>
            </div>
            )

         }
         </div>
        </Container>
            
        </>
    )
}

export default Weather;
