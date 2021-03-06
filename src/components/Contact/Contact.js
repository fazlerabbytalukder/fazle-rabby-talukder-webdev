import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cac4nuf', 'template_ql04u2i', form.current, 'o3-uA0uz7P_V85DvY')
    };
    return (
        <div id='contact' className='container mb-5'>
            <div className="text-center mt-5 mb-5">
                <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>Get In Touch</p>
                <h2 style={{ color: '#4FB4F2' }}>Contact Me</h2>
            </div>
            <div className="row text-center">
                <div className="col-md-6">
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <div className="card card-background mb-3" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <i className="fa-solid fa-envelope"></i>
                                <h5>Email</h5>
                                <p>talukderfazlerabby@gmail.com</p>
                                <a href="mailto:talukderfazlerabby@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        </div>
                        <div className="card card-background mb-3" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <i className="fa-brands fa-facebook-messenger"></i>
                                <h5>Messanger</h5>
                                <p>Fazle Rabby Talukder</p>
                                <a href="https://m.me/frtfazlerabby" target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        </div>
                        <div className="card card-background mb-3" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <i className="fa-brands fa-whatsapp"></i>
                                <h5>WhatsApp</h5>
                                <p>+8801739719796</p>
                                <a href="https://wa.me/8801739719796" target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-start">
                    <form ref={form} onSubmit={sendEmail} className='all-inputs'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                            <input type="text" name='name' className="form-control from-design" id="exampleFormControlInput1" placeholder="Mr.X" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Your Email</label>
                            <input type="email" name='email' className="form-control from-design" id="exampleFormControlInput2" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                            <textarea className="form-control from-design" name='message' id="exampleFormControlTextarea3" rows="8" placeholder="Your Message"></textarea>
                        </div>
                        <button className='button2'>Send Message</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;