import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AlecPage = () => (
    <Layout>
      <h1>Hi from Alec's page</h1>
      <p>"Hello, World!". I am a Junior at the University of Iowa trying to grow my expertise in programming. My experience in the past has pushed me to be a leader, whether it is teaching new hires or helping to make creative decisions. I am always looking for the new best way to complete a task and my attentiveness and critical thinking have made me a quick learner. I'm extremely passionate about programming and using my skills to improve any organization I'm apart of.</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export const Head = () => <Seo title="Alec's Page" />
  
  export default AlecPage