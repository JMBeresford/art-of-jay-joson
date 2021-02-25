import * as React from "react"
import { useState, useEffect } from "react"
import Header from "../components/header/header"
import Hero from '../components/hero/hero'
import Carousel from '../components/carousel/carousel'
import BigTriangle from '../components/carousel/bigTriangle'
import About from "../components/about/about"

// Home page component
const IndexPage = () => {

  const [scrolled, setScrolled] = useState(false)

  function handleScroll(e) {
    if (window.scrollY > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
  })

  return (
    <main id={`index`}>
      <div className={scrolled ? "scrollIndicator hide" : "scrollIndicator"}>
        <svg className={`circle`} xmlns="http://www.w3.org/2000/svg" width="23.616" height="13.503" viewBox="0 0 23.616 13.503">
          <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z" transform="translate(-6.188 -11.246)"/>
        </svg>
        <svg className={`circle`} xmlns="http://www.w3.org/2000/svg" width="23.616" height="13.503" viewBox="0 0 23.616 13.503">
          <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z" transform="translate(-6.188 -11.246)"/>
        </svg>
        <svg className={`circle`} xmlns="http://www.w3.org/2000/svg" width="23.616" height="13.503" viewBox="0 0 23.616 13.503">
          <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M18,20.679l8.93-8.937a1.681,1.681,0,0,1,2.384,0,1.7,1.7,0,0,1,0,2.391L19.2,24.258a1.685,1.685,0,0,1-2.327.049L6.68,14.14a1.688,1.688,0,0,1,2.384-2.391Z" transform="translate(-6.188 -11.246)"/>
        </svg>
      </div>
      <Header scrollable={true} />
      <Hero />
      <BigTriangle />
      <Carousel />
      <About />
    </main>
  )
}

export default IndexPage
