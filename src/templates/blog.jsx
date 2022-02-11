import { Link } from "gatsby";
import React from "react";
import Layout from '../components/layout'
import Seo from '../components/seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Blog = ({ pageContext }) => {
    const {blog} = pageContext
    return(
        <Layout>
            <Seo title={blog.frontmatter.title} />
            <div className="single-blog">
                <header className="single-blog-header">
                    <h1>{blog.frontmatter.title}</h1>
                    <p>Published the {blog.frontmatter.date}</p>
                </header>
                <div className="single-blog-content">
                    <MDXRenderer>
                        {blog.body}
                    </MDXRenderer>
                </div>
            </div>
            <Link to='/blogs'>Go Back</Link>
        </Layout>
    )
}

export default Blog