import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import WeatherCard from './weathercard'
function Home() {
    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([])

    let submitHandle = async (e) => {
        e.preventDefault();
        console.log('i am submit handler')

        try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&appid=a0bb80450f3f29ec78fafdc96977cb7c&units=metric`)
            console.log("response", response)
            setData(response.data.list)

        }
        catch (error) {
            console.log("error in API")
        }

    }

  
    return (
        <div>
            <h1>Weather App</h1>

            <form onSubmit={submitHandle}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City Name</Form.Label>
                    <Form.Control type="text" value={cityName} placeholder="Enter your city name" onChange={(e) => setCityName(e.target.value)} required />
                </Form.Group>
                <Button type='submit'>Get Weather</Button>

            </form>
    
{
      data.map((eachForcast, index) => (

        <WeatherCard
            key={index}
            date={eachForcast.dt_txt}
            temp={eachForcast.main.temp}
            min={eachForcast.main.temp_min}
            max={eachForcast.main.temp_max}
            
        />
    ))
}


        </div>
    )
}

export default Home