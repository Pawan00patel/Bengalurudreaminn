import React, { useState } from 'react';
import '../../styles/ContactUs.css';
 // Import the CSS file


const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({
      firstName: '',
      lastName: '',
      mail: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Just say <span className="contact-pink">Hello !</span></h2>
        <p>Let us know more about you !</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="mail"
              placeholder="Mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-btn">SUBMIT</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact <span className="contact-pink">Information</span></h2>
        <p>
          77 Baker Street<br />
          Bondowoso. 87655<br />
          Indonesia
        </p>
        <p>
          Call Us : +62 81 334 61 00
          <br />
          <br />
          We are open from Monday - Friday<br />
          08.00 am - 05.00 pm
        </p>
        <h3 className="contact-follow">Follow Us</h3>
        <div className="contact-socials">
          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">vimeo</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
