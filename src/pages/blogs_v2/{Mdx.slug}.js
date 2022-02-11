import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function BlogV2(props) {
  const {mdx: post} = useStaticQuery(graphql`
    query($slug: String) {
      mdx(slug: {eq: $slug}) {
        id
        body
      }
    }
  `)

  return (
    <Layout>
      <Seo title={props.pageContext.frontmatter__title} />
      <div>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogV2