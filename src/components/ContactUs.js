import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  // initialize form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  // send email
  const sendEmail = (data) => {
    // configure EmailJS
    // emailjs.init("gNq_zxFMPS-65MPJ-");
    // send email
    emailjs.send("service_o391u4e", "template_e702ov9", {
      to_email: 'ankurdahiya112@gmail.com',
      ...data
    }, "gNq_zxFMPS-65MPJ-")
      .then(res => {
        console.log('Email sent successfully');
      })
      .catch(err => {
        console.error('Error sending email: ', err);
      });
  }

  return (
    <>
    <div className='flex md:flex-row flex-col' id="ContactUs">
    <div className='md:w-3/4 p-6 bg-cyan-500'>
      <p className=''>"Got an issue? Contact us via email and let us help you out!"</p>
    </div>
    <form onSubmit={handleSubmit} className="md:w-3/4 p-6 bg-black">
      <h2 className="text-4xl mb-4 font-medium text-white">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-cyan-500 font-medium mb-2">Name</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-cyan-500 font-medium mb-2">Email</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-cyan-500 font-medium mb-2">Message</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-indigo-500 shadow-xl shadow-indigo-500/50 text-white p-2 rounded-lg w-20 hover:bg-indigo-600"
        type="submit">Send</button>
    </form>
    </div>
    </>
  );
}

export default ContactUs;