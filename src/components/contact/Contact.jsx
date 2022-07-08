import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault()
        emailjs
          .sendForm(
            "service_o714bck",
            "template_3d4qz5d",
            formRef.current,
            "SQdVTAclugdCBQYmP"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
    }
    

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 84618 99238
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              jainparas8461@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Balabai bazar, Bada, Gwalior, MP, 474001
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What is your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_subject"
              placeholder="Subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              name="user_email"
              placeholder="Email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            {done && alert("Thankyou for contacting, we will contact you soon ")}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact