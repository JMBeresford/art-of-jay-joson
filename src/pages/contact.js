import * as React from "react"
import Header from '../components/header/header'
import ContactContent from '../components/contact/contactContent'

// Contact page component
const ContactPage = () => {


  return (
    <main style={{"height": "100vh"}}>
      <Header />
      <ContactContent />
    </main>
  )
}

export default ContactPage
