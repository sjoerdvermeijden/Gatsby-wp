import React from "react"
import Projects from '../components/projects'
import Posts from '../components/posts'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
	<Layout>
		<Projects />
		<Posts />
		<SEO title="Home" />
  	</Layout>
)

export default IndexPage
