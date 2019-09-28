import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SignUpForm from "../components/SignUpForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>👶🏻🍼🧸</h1>
    <h1>Please RSVP to our baby shower?</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <SignUpForm />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
