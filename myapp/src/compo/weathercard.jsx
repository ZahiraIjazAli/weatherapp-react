import React from 'react'
import '../index.css'
import moment from "moment";
import { Card,Button } from 'react-bootstrap'
function WeatherCard({date,temp,max,min}){
return(

<>


    <Card
    style={{ width: '18rem' }}
    border="success"
>
    <Card.Body>
        <Card.Title>{moment(date).format("dddd ha")}</Card.Title>
        <Card.Text>
            <h1> {temp}°C </h1>
        </Card.Text>
        <Card.Title> {min}°C - {max}°C</Card.Title>

    </Card.Body>
</Card>
</>
        // <div className="card">

        //     <div> {moment(date).format("dddd ha")} </div>
        //     <h1> {temp}°C </h1>
        //     <div> {min}°C - {max}°C </div>
        // </div>




)}


export default WeatherCard