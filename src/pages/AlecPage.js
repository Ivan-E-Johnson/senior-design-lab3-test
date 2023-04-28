import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import React, { useState } from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import PostTemplate from "../templates/Comment_template"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const AlecPage = () => {

  const disqusConfigCurrent = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: 'alec-page',
    title: "Alec's Page",
  }

  return (
    <Layout>
      <div className={styles.textCenter}>
      <h1>Hi from Alec's page</h1>
      <p>"Hello, World!". I am a Junior at the University of Iowa trying to grow my expertise in programming. My experience in the past has pushed me to be a leader, whether it is teaching new hires or helping to make creative decisions. I am always looking for the new best way to complete a task and my attentiveness and critical thinking have made me a quick learner. I'm extremely passionate about programming and using my skills to improve any organization I'm apart of.</p>
      
        
        <h1 className={styles.name}>Alec</h1>
        <p className={styles.jobTitle}>ComputerScience and Engineering Student</p>
        <Link className={styles.button} to="/">Go back to the homepage</Link>

        
        <div className="image-container">
        <Carousel
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          showThumbs={false}>
          
          <div>
            <StaticImage
              src="../images/Alec_imgs/Alec_grass.jpg"
              alt="Image 1"
              placeholder="blurred"
              className="carousel-image"
            />
            <h1>Hi from Alec's page</h1>
            <p className="legend">Alec</p>
          </div>
          <div>
            <StaticImage
              src="../images/Alec_imgs/man_and_pup.png"
              alt="Image 2"
              placeholder="blurred"
              className="carousel-image"
            />
            <p className="legend">My Dog Bentley</p>
          </div>
          <div>
            <StaticImage
              src="../images/Alec_imgs/First_day_of_16th_Grade.jpg"
              alt="Image 3"
              placeholder="blurred"
              className="carousel-image"
            />
            <p className="legend">Starting School</p>
          </div>
        </Carousel>
        </div>
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
  export const Head = () => <Seo title="Alec's Page" />
  
  export default AlecPage