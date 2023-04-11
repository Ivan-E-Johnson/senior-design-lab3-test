import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout" // TODO: update layout
import Seo from "../components/seo"
import * as styles from "../components/index.module.css" //TODO: update styles

const samplePageLinks = [
    {
      text: "Ivan's Page",
      url: "IvanPage",
      badge: false,
      description:
        "Ivan's Profile Page ",
    },
    { text: "Niam's Profile Page", url: "NiamPage" },
    { text: "Alec's Profile Page", url: "using-ssr" },
  ]
  
const LandingPage = () => (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          Welcome to <b>Gatsby!</b>
        </h1>
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
          Edit <code>src/pages/landing-page.js</code> to update this page.
        </p>
      </div>
    </Layout>
  )

export const Head = () => <Seo title="Landing Page" />

export default LandingPage