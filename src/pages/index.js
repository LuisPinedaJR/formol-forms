import React from "react"
import { Link } from "gatsby"
// import { css } from "@emotion/core"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import SignUpForm from "../components/SignUpForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Cynthia's Baby Shower" />
    {/* <span
      css={css`
        font-size: 50px;
      `}
      role="img"
      aria-label="baby"
    >
      👶🏻🍼🧸
    </span> */}
    <h1>Please RSVP to our baby shower</h1>
    <h2>We also need you address to mail the invite</h2>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <SignUpForm />
    <Link to="/page-3">Page 3 from</Link>
    <h3>Thank You for the RSVP🍼</h3>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
