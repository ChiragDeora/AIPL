import React from 'react'
import './contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08f6d8b3-3812-43e7-af1b-1909fbae4665");

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
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact information below.</p>
        <ul>
          <li><img src="/assets/mail.jpg" alt="" />Info@assetsuindia.in</li>
          <li><img src="/assets/call.png" alt="" />+91 85913 55873</li>
          <li><img src="/assets/adrr.png" alt="" />109/110 PRESTIGE INDUSTRIAL ESTATE, ORLEM, MALAD WEST, MUMBAI - 400064</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} className='contact-form'>
                
          <label>Your Name
          <input type="text" name='name' placeholder='Enter Your Name' required/>
                    </label>
          <label>Phone Number

          <input type="tel" name='phone' placeholder='Enter Your Telephone Number' required/>
                    </label>
          <label> Write Your messages Here

          <textarea name="message" placeholder='Enter your message' required ></textarea>
                    </label>
          <button type='submit' className='btn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

