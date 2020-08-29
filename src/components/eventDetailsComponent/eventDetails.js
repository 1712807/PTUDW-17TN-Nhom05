import React, {Component} from 'react'
import EventsImage from '../../asserts/js/eventsImage'
import {
    BrowserRouter as Router, 
    Link
} from 'react-router-dom'
export class EventDetails extends Component {
    render() {
        return(
            <Router>
                <div className="container-fluid">
                    <form className="col-lg-9" style={{margin: 'auto'}}>
                        <div className="form-group" id="getacard">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>Library Closured Because of the Coronavirus (COVID-19)</b></h2>
                            <div><img src={EventsImage[parseInt(1)]} style={{width: '100%'}}/></div>
                            <div style={{textAlign: 'left', marginTop: '10px'}}>
                                <p>As you are probably aware, Trafford’s libraries closed on Monday 23rd March as a result of the Covid-19 pandemic and all staff were deployed, wherever possible, to support other services, including phoning over 6,000 residents who were shielding to see if they needed help. As a result of the Government’s statement on Tuesday 23rd June, we are happy to let you know that some libraries will re-open from Monday 6th July. We will be offering slightly different services in the first phase of re-opening to maintain the current guidelines around social distancing for the safety of our staff and customers. You will be able to:</p>
                                <ul>
                                    <li>Return library books you borrowed before the libraries closed.</li>
                                    <li>Borrow more books by using the new ‘Order and Collect’ service. </li>
                                    <li>Pre-book to use the public computers if you don’t have access to computers.</li>
                                </ul>
                                <p>All returned books willbe quarantined for 72 hours as recommended by Public Health England.
                                We will ask you to queue outside and we will let you in on a ‘one in, one out basis'. Once inside, you will be able to put books you are bringing back on trolleys located in the entrance and/or pick up your new books from a table, also in the entrance. 
                                If you have pre-booked to use the computers, there will be a one way system to follow to ensure social distancing.    
                                </p>
                            </div>
                        </div>      
                    </form>
                </div>
            </Router>
        
        )
    }
}