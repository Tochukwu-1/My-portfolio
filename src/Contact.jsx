import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // styles below

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rhh8onc",
      "template_yd2ns7f",
      form.current,
      "-w5PCYKJpUVmY3Nsb"
    ).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
        setFormData({ name: "", email: "", message: "" }); // clear form
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-container">
      {/* Name */}
      <div className={`form-group ${formData.name ? "filled" : ""}`}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder=" "
          required
        />
        <label className="form-label">Name</label>
      </div>

      {/* Email */}
      <div className={`form-group ${formData.email ? "filled" : ""}`}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder=" "
          required
        />
        <label className="form-label">Email</label>
      </div>

      {/* Message */}
      <div className={`form-group ${formData.message ? "filled" : ""}`}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input textarea"
          placeholder=" "
          rows="4"
          required
        />
        <label className="form-label form-message">Message</label>
      </div>

      <button type="submit" className="submit-btn">Send Message</button>
    </form>
  );
};

export default Contact;
