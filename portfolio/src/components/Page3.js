import React, {useState, useEffect} from 'react';
import NicoPic from '../images/nico-pic.png';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import { send } from "emailjs-com";
import "../css/page3.css";

const Contact = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailFailure, setEmailFailure] = useState(false);

    const emailPostReq = (e) => {
        e.preventDefault();
        send('service_portfolio', 'template_l02ksnc', {from_name: name, to_name: address, reply_to: subject, message: body}, '1BHWt3W9vBwUFrvT0')
            .then(response => {
                console.log(response);
                if(response) {
                    setEmailSuccess(true);
                }
            })
            .catch(error => {
                console.log(error);
                if(error) {
                    setEmailFailure(true);
                }
            })
    }

    const inputHandler = (e) => {
        e.persist();
        setEmail({...email, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        setName(email.name);
        setAddress(email.address);
        setSubject(email.subject);
        setBody(email.body);
    }, [email])

    const handleClose = () => {
        setEmailSuccess(false);
        setEmailFailure(false);
      };

    return (
        <div className='page-3'>
            <div className='contactForm'>
                <center>
                    <form onSubmit={emailPostReq}>
                        <h2 style={{marginBottom: "30px"}}>Send an Email</h2>

                        <label>Name</label> <br />
                        <input id='name' name='name' type='text' onChange={inputHandler} required/>
                        <br />
                        <label>Email</label> <br />
                        <input id='address' name='address' type='text' onChange={inputHandler} required/>
                        <br />
                        <label>Subject</label> <br />
                        <input id='subject' name='subject' type='text' onChange={inputHandler} required/>
                        <br />
                        <label>Message</label> <br />
                        <textarea id='body' name='body' rows='S' onChange={inputHandler} required></textarea>
                        <br />
                        <input id='submit' type='submit' name='submit' value='Submit'/>
                    </form>
                </center>
            </div> 
            
            {emailSuccess ? <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className="modal"
                                open={emailSuccess}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={emailSuccess}>
                                <div className="paper">
                                    <div className="icon">
                                        <CheckCircleOutlineIcon />
                                    </div>
                                    <h2 id="transition-modal-title" style={{margin: '0px 0px 50px'}}>Success!</h2>
                                    <p id="transition-modal-description">Your email has been received and you will be contacted shortly.</p>
                                </div>
                                </Fade>
                            </Modal> : null}

            {emailFailure ? <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className="modal"
                                open={emailFailure}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={emailFailure}>
                                <div className="paper">
                                    <div className="icon">
                                        <SmsFailedIcon />
                                    </div>
                                    <h2 id="transition-modal-title" style={{margin: '0px 0px 50px'}}>Error!</h2>
                                    <p id="transition-modal-description">Your email was not able to be processed. Please refresh and try again.</p>
                                </div>
                                </Fade>
                            </Modal> : null}
        </div>
    )
}

export default Contact;