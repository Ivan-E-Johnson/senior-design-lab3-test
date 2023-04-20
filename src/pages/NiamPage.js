import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import React, { useState } from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import PostTemplate from "../templates/Comment_template"

const NiamPage = () => {
    const disqusConfigCurrent = {
        url: typeof window !== 'undefined' ? window.location.href : '',
        identifier: 'niam-page',
        title: "Niam's Page",
    }

const NiamPage = () => (
    <Layout>
      <h1>Hi from Niam's page</h1>
      <p>I have done so much</p>
        <Link to="/">Go back to the homepage</Link>

        <PostTemplate
            postId={disqusConfigCurrent.identifier}
            postTitle={disqusConfigCurrent.title}
            postUrl={disqusConfigCurrent.url}
        />
    </Layout>
  )
  
  export const Head = () => <Seo title="Niam's Page" />
  
  export default NiamPage