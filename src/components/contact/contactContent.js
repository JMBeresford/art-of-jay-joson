import React from 'react'
import styles from './contactContent.module.css'
import ContactForm from './contactForm'

const ContactContent = () => {
  return (
    <section className={styles.contactContent}>
      <div className={styles.contactForm}
        data-sal="slide-right"
        data-sal-duration="400"
        data-sal-delay="200"
      >
        <ContactForm />
      </div>

      <div className={styles.textDiv}
        data-sal="fade"
        data-sal-duration="400"
        data-sal-delay="400"
      >
        <p>Questions? Concerns? Want To Work Together?</p>
        <p>Shoot Me a Message and Let's Talk!</p>
      </div>
    </section>
  )
}

export default ContactContent
