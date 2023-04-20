import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const NiamPage = () => (
    <Layout>
      <h1>About Niam</h1>
      <p>Hi! I am an electrical engineering student with a focus on electronic circuits. My interests include signal processing and RF. I love to travel and got the chance to go to Houston, Texas last year to attend the SWE national conference. I learned a lot when I was there and got the chance to network with so many talented engineers.</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Niam's Page" />
  
  export default NiamPage