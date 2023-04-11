import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AlecPage = () => (
    <Layout>
      <h1>Hi from Alec's page</h1>
      <p>I have done so much</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Alec's Page" />
  
  export default AlecPage