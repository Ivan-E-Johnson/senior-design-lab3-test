import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import React, { useState } from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import PostTemplate from "../templates/Comment_template"

const IvanPage = () => {
  const disqusConfigCurrent = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: 'ivan-page',
    title: "Ivan's Page",
  }

  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/IMG_5168.png"
          loading="eager"
          quality={40}
          width={250}
          formats={["auto", "webp", "avif"]}
          alt="Ivan's profile picture"
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1 className={styles.name}>Ivan</h1>
        <p className={styles.jobTitle}>Computer Science Student</p>
        <p className={styles.intro}>{`I started working in a research lab at 17 and found my passion for doing image processing and data analysis. I had minimal prior experience but I was very motivated and pushed myself to learn outside of work. During the initial year of the COVID-19 pandemic I took a year off of school, which allowed me to realize that my passions required a switch from chemical engineering to computer science. Since switching majors I have reignited my passion for software development, specifically when applied to image processing, data analysis, and machine learning. Though I have taken many classes to enhance my knowledge in these areas, I also have been developing the skills needed to become a full stack engineer.`}</p>
        <Link className={styles.button} to="/">Go back to the homepage</Link>
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
