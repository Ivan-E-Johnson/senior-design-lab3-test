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
  { text: "Niam's Page", url: "NiamPage" },
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
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Hello, We are Senior design team 2.</h1>
      <p>
        We are all Engineering students at the University of Iowa. Through the
        first half of Senior Design, we worked on three labs that helped us
        prepare for our project in the second half, where we will be building a
        mini greenhouse module.
      </p>
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
          <Link
            className={styles.listItemLink}
            to={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </Link>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
