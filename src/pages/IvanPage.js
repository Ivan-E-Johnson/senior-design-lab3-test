import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IvanPage = () => (
    <Layout>
      <h1>Hi from Ivan's page</h1>
      <p>I have done so much</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Ivan's Page" />
  
  export default IvanPage