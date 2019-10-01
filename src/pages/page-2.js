import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Why RSVP?" />
    <h1>Why RSVP? 🍼</h1>
    <p>
      The party planner needs to know how many to expect in order to make food,
      find a big enough location, invitation orders, etc. The reason for address
      requirement is to mail you a formal invitation.
    </p>

    <Link to="/">Click to RSVP</Link>
  </Layout>
)

export default SecondPage
