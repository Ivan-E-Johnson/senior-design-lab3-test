import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const NiamPage = () => (
    <Layout>
      <h1>Hi from Niam's page</h1>
      <p>I have done so much</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Niam's Page" />
  
  export default NiamPage