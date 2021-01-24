import * as React from "react"
import Layout from '../components/layout'
import Header from "../components/header/header"
import GalleryContent from "../components/gallery/galleryContent"

const GalleryPage = () => {
  return (
    <main>
      <Layout>
        <Header />
        <GalleryContent />
      </Layout>
    </main>
  )
}

export default GalleryPage
