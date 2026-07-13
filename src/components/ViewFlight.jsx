import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewFlight = () => {
     const[data,changeData] =useState([])

    const fetchData =() => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

useEffect(
    () => {
        fetchData()
    },[]
)

  return (
    <div>
        
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col lg-4 col-xl-4 col-xxl-4">
                                            <div className="card" >
                                               
                                                <div className="card-body">
                                                    <div>
                                                        <strong>ID :</strong> {value.id} <br />
                                                        <strong>Flight Number :</strong> {value.flight_number} <br />
                                                        <strong>Airline :</strong> {value.airline} <br />
                                                        <strong>Origin : </strong> {value.origin} <br />
                                                        <strong>Destination : </strong> {value.destination} <br />
                                                        <strong>Departure Date : </strong> {value.departure_date} <br />
                                                        <strong>Departure Time : </strong> {value.departure_time} <br />
                                                        <strong>Arrival Time: </strong> {value.arrival_time} <br />
                                                        <strong>Fare : </strong> {value.fare} <br />
                                                        <strong>Total seats : </strong> {value.total_seats} <br />
                                                        <strong>Available seats : </strong> {value.available_seats} <br />
                                                        <strong>Status : </strong> {value.status} <br />
                                                        <strong>Created At : </strong> {value.created_at} <br />
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>


    </div>

    
  )
}

export default ViewFlight