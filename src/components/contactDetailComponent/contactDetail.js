import React, {Component} from 'react'
import {
    BrowserRouter as Router, 
    Link
} from 'react-router-dom'

export class ContactDetail extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <form className="col-lg-8" style={{margin: 'auto'}}>
                        <div className="form-group" id="getacard">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>GET A CARD</b></h2>
                            <ul className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px', lineHeight: '1.8', listStyle: 'inside'}}>
                                You can get your card through 1 in 2 ways later: 
                                <li>Go to the library directly, contact our librarian for card issuance instructions.</li>
                                <li>After signing up successful, you will receive a confirmation email. then, you just need to give that email to the librarian and you will get your card.</li>
                            </ul>
                        </div>

                        <div className="form-group" id="manageacc">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>MANAGE MY ACCOUNT</b></h2>
                            <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                Please go to page <a href='/profile' style={{color: '#1429D7', fontWeight: 'bold'}}>My profile</a> to be able to edit your account information.
                            </p>
                        </div>

                        <div className="form-group" id="print">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>PRINT</b></h2>
                            <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                You need to connect to a printer for this function. 
                            </p>
                        </div>

                        <div className="form-group" id="gethelp">
                            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>GET HELP</b></h2>                                      
                            <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                If you have any questions about our website, please feel free to ask us below. We will respond as soon as possible.
                            </p>
                            <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                                <textarea className="form-control" placeholder="*Questions" required style={{height: '100px'}}/>
                            </div>

                            <button className="btn btn-primary border-0 rounded-pill mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                                <b>Submit</b>
                            </button>
                        </div>        
                    </form>
                </div>
            </Router>
            
        )
    }
}