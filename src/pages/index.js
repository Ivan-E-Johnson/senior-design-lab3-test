import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Alec Knobloch",
    src: "C:...\images\TCSNSprofilePickME.jpg",
    url: "AlecPage",
    description:
      "He's a pretty cool guy once you get to know him.",
  },
  {
    text: "Ivan Johnson",
    url: "IvanPage",
    description:
      "Genius, inventor, and all around cool guy.",
  },
  {
    text: "Niam El-Zein",
    url: "NiamPage",
    description:
      "Smart, funny, and a great person.",
  }
]

const samplePageLinks = [
  {
    text: "Ivan's Page",
    url: "IvanPage",
    badge: false,
    description:
      "Ivan's Profile Page ",
  },
  { text: "Niam's Page", url: "using-typescript" },
  {
    text: "Alec's Page",
    
    url: "AlecPage",
    badge: false,
    description:
      "Alec's Profile Page ",
  },
  
]


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/pngwing.com.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to team Blitz's Profile Page!
      </h1>
      <p className={styles.intro}>
        <b>Team pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <button onclick="changeBackgroundColor()">Change Background Color</button>
    <script>
      function changeBackgroundColor() {document.body.style.backgroundColor = "white" }
    </script>
  </Layout>
  
)
  

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
