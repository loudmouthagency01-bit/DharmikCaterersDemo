import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page page-container animate-fade-in">
      <h1 className="section-title">Contact Us</h1>
      <p className="text-center mb-4">We would love to hear from you. Get in touch to plan your exclusive experience.</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Reach out to us for any inquiries regarding our catering packages or to book us for your next event.</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><MapPin /></div>
              <div>
                <h3>Location</h3>
                <p>Ahmedabad , Gujarat.</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 94090 77980</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail /></div>
              <div>
                <h3>Email</h3>
                <p>dharmikcaterers@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send an Inquiry</h2>
          <form 
            className="contact-form" 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
          >
            {/* Hidden input for Netlify forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" style={{ display: 'none' }}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your full name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your email address" />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="Your contact number" />
            </div>

            <div className="form-group">
              <label htmlFor="event">Type of Event</label>
              <select id="event" name="event" required>
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Details</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us more about your event..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
