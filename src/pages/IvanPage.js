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
  return(
  
    <Layout>
      
      <h1>Hi from Ivan's page</h1>

      <StaticImage
        src="../images/IMG_5168.png"
        loading="eager"
        quality={40}
        width = {40}
        height={ 60}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <p>I have done so much</p>
      <Link to="/">Go back to the homepage</Link>
      
      <PostTemplate
        postId={disqusConfigCurrent.identifier}
        postTitle={disqusConfigCurrent.title}
        postUrl={disqusConfigCurrent.url}
      />
      
    </Layout>
  )
}
  export const Head = () => <Seo title="Ivan's Page" />
  
  export default IvanPage