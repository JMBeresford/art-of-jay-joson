import React, { useState } from 'react';
import styles from './contactForm.module.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <div className={styles.formWrapper}>
      <form
        id='contactForm'
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />

        <label htmlFor='name'>Name</label>
        <input name='name' type='text' onChange={handleChange} />

        <label htmlFor='email'>Email</label>
        <input name='email' type='text' onChange={handleChange} />

        <label htmlFor='phone'>Phone</label>
        <input name='phone' type='text' onChange={handleChange} />

        <label htmlFor='message'>Message</label>
        <textarea name='message' onChange={handleChange} />

        <div
          id='captcha'
          className={styles.captcha}
          data-netlify-recaptcha='true'
        />

        <button type='submit'>Let's Talk!</button>
      </form>
    </div>
  );
};

export default ContactForm;
