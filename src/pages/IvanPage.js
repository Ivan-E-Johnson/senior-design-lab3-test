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
const IvanPage = () => {
  const disqusConfigCurrent = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: 'ivan-page',
    title: "Ivan's Page",
  }

  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1 className={styles.name}>Ivan</h1>
        <p className={styles.jobTitle}>Computer Science Student</p>
        <p className={styles.intro}>{`I started working in a research lab at 17 and found my passion for doing image processing and data analysis. I had minimal prior experience but I was very motivated and pushed myself to learn outside of work. During the initial year of the COVID-19 pandemic I took a year off of school, which allowed me to realize that my passions required a switch from chemical engineering to computer science. Since switching majors I have reignited my passion for software development, specifically when applied to image processing, data analysis, and machine learning. Though I have taken many classes to enhance my knowledge in these areas, I also have been developing the skills needed to become a full stack engineer.`}</p>
        <Link className={styles.button} to="/">Go back to the homepage</Link>
        <Carousel
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      showThumbs={false}>
      <div>
        <StaticImage
          src="../images/Ivan_imgs/IMG_5584.JPG"
          alt="Image 1"
          placeholder="blurred"
        />
        <p className="legend">In Paris</p>
      </div>
      <div>
        <StaticImage
          src="../images/IMG_5168.png"
          alt="Image 2"
          placeholder="blurred"
        />
        <p className="legend">My Cat Clyde</p>
      </div>
      <div>
        <StaticImage
          src="../images/Ivan_imgs/IMG_3576.jpg"
          alt="StudyAbroad_1"
          placeholder="blurred"
        />
        <p className="legend">Roman Ruins</p>
      </div>
    </Carousel>


        <PostTemplate
          postId={disqusConfigCurrent.identifier}
          postTitle={disqusConfigCurrent.title}
          postUrl={disqusConfigCurrent.url}
        />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Ivan's Page" />

export default IvanPage
