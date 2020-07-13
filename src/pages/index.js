import React from "react"
import Projects from '../components/projects'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
	<Layout>
		<Projects />
		<SEO title="Home" />
  	</Layout>
)

export default IndexPage
