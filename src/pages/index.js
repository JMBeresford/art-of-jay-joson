import * as React from "react"
import Layout from '../components/layout'
import Header from "../components/header/header"
import Hero from '../components/hero/hero'
import Carousel from '../components/carousel/carousel'

// Home page component
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Header />
        <Hero />
        <Carousel />
      </Layout>
    </main>
  )
}

export default IndexPage
