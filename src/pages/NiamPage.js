import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import PostTemplate from "../templates/Comment_template"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const NiamPage = () => {
  const disqusConfigCurrent = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: 'Niam-page',
    title: "Niam's Page",
  }
  return(
      <Layout>
      
      <h1>About Niam</h1>
      <p>
        Hi! I am an electrical engineering student with a focus on electronic
        circuits. My interests include signal processing and RF. I love to travel
        and got the chance to go to Houston, Texas last year to attend the SWE
        national conference. I learned a lot when I was there and got the chance
        to network with so many talented engineers.
      </p>
      <div className="image-container">
      <Carousel
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}>
        <div>
          <StaticImage
            src="../images/Niams_Imags/NiamImg.jpg"
            alt="Image 1"
            placeholder="blurred"
            className="carousel-image"
          />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <StaticImage
            src="../images/Niams_Imags/NiamImg-1.jpg"
            alt="Image 2"
            placeholder="blurred"
            className="carousel-image"
          />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <StaticImage
            src="../images/Niams_Imags/NiamImg-2.jpeg"
            alt="Image 3"
            placeholder="blurred"
            className="carousel-image"
          />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>

      </div>

      <PostTemplate
            postId={disqusConfigCurrent.identifier}
            postTitle={disqusConfigCurrent.title}
            postUrl={disqusConfigCurrent.url}
          />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )

}
export const Head = () => <Seo title="Niam's Page" />

export default NiamPage
