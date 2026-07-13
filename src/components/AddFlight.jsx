import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddFlight = () => {
    const [input, changeInput] = useState(

        {

            flight_number: "",
            airline: "",
            origin: "",
            destination: "",
            departure_date: "",
            departure_time: "",
            arrival_time: "",
            fare: "",
            total_seats: ""
        }
    )


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("https://host-demo-app.onrender.com/api/add-flight", input).then(
            (response) => {
                console.log(response.data)

            }

        ).catch(

        )
    }
    return (

        <div>
         <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Flight Number</label>
                                <input type="text" className="form-control"
                                    name="flight_number" value={input.flight_number} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Airline</label>
                                <select name="" id="" className="form-control" name="airline" value={input.airline} onChange={inputHandler} >
                                    <option value="">Select</option>
                                    <option value="Air India">Air India</option>
                                    <option value="Indigo">Indigo</option>
                                </select>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Origin</label>
                                <input type="text" className="form-control" name="origin" value={input.origin} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Destination</label>
                                <input type="text" className="form-control" name="destination" value={input.destination} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Departure Date</label>
                                <input type="text" className="form-control"

                                    name="departure_date" value={input.departure_date} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Depature Time</label>
                                <input type="text" className="form-control"
                                    name="departure_time" value={input.departure_time} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Arrival Time</label>
                                <input type="text" className="form-control"
                                    name="arrival_time" value={input.arrival_time} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Fare</label>
                                <input type="text" className="form-control"
                                    name="fare" value={input.fare} onChange={inputHandler}
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Total Seat</label>
                                <input type="text" className="form-control" name="total_seat" value={input.total_seat} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddFlight