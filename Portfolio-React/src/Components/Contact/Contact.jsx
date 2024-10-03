import React from 'react'
import './Contact.css'
import call from '../Assets/call.svg'
import message from '../Assets/message.svg'
import location from '../Assets/location.svg'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a8cf2cad-503d-4abc-8d1a-335fd6ad347d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div id='contact' className="contact">
   <div className="contact-title">
    <h1>Get in touch</h1>

   </div>
   <div className="contact-sec">
    <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'am currently avaliable to take on new projects, so feel free to send me a message about anything that you want</p>
        <div className="contact-details">
            <div className="contact-detail">
            <img src={message} alt=''></img>
            <p>navinv.22cse@kongu.edu</p>
            </div>
            <div className="contact-detail">
            <img src={call} alt=''></img>
            <p>8940773056</p>
            </div>
            <div className="contact-detail">
            <img src={location} alt=''></img>
            <p>abc @ abc @ abc</p>
            </div>

        </div>
    </div>
    <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter your name' name='name'></input>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter your email' name='email'></input>
        <label htmlFor=''>Write the message here</label>
        <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
            <button  className="button" type='submit' >Submit now</button>
       

          </form>
        </div>

        </div>
  )
}

export default Contact
