import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import HookForm from "../components/hookform"

const thirdpage = () => (
  <Layout>
    <Link to="/">Click to RSVP</Link>
    <HookForm />
  </Layout>
)

export default thirdpage
