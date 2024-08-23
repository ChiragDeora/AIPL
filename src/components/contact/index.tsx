import React from 'react';
import './contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact Us</h2> 
      <div className="contact-content">
        <div className="contact-col">
          <h3>Send us a message</h3>
          <p>Feel free to reach out through the contact form or find our contact information below.</p>
          <ul>
            <li><img src="/assets/mail.jpg" alt="" />Info@assetsuindia.in</li>
            <li><img src="/assets/call.png" alt="" />+91 85913 55873</li>
            <li><img src="/assets/adrr.png" alt="" />109/110 PRESTIGE INDUSTRIAL ESTATE, ORLEM, MALAD WEST, MUMBAI - 400064</li>
          </ul>
        </div>
        
        <div className="contact-form-container">
          <form onSubmit={onSubmit} className='contact-form'>
            <label>Your Name
              <input type="text" name='name' placeholder='Enter Your Name' required/>
            </label>
            <label>Email
              <input type="email" name='email' placeholder='Enter Your Email' required/>
            </label>
            <label>Phone Number
              <input type="tel" name='phone' placeholder='Enter Your Telephone Number' required/>
            </label>
            <label>Write Your messages Here
              <textarea name="message" placeholder='Enter your message' required ></textarea>
            </label>
            <button type='submit' className='btn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
