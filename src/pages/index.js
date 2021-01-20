import * as React from "react"
import Layout from '../components/layout'
import Header from "../components/header/header"
import Hero from '../components/hero/hero'
import Carousel from '../components/carousel/carousel'
import BigTriangle from '../components/carousel/bigTriangle'
import About from "../components/about/about"

// Home page component
const IndexPage = () => {
  return (
    <main>
      <div className="scrollIndicator">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Layout>
        <Header />
        <Hero />
        <BigTriangle />
        <Carousel />
        <About />
      </Layout>
    </main>
  )
}

export default IndexPage
