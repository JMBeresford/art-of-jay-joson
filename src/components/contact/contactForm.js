import React from 'react'
import styles from './contactForm.module.css'

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('contactForm');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      console.log('Form successfully submitted')
      console.log(formData)
    }).catch((error) =>
    alert(error))
  }

  return (
    <div className={styles.formWrapper}>
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <label htmlFor="name">Name</label>
        <input name="name" type="text"></input>
        
        <label htmlFor="email">Email</label>
        <input name="email" type="text"></input>
        
        <label htmlFor="phone">Phone</label>
        <input name="phone" type="text"></input>

        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>

        <div id="captcha" className={styles.captcha} data-netlify-recaptcha="true"></div>

        <button type="submit">Let's Talk!</button>
        
      </form>
    </div>
  )
}

export default ContactForm
