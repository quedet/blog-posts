import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as BlogStyle from './blogs.module.scss'

function Blogs({ pageContext, data }) {
    const { nodes: blogs, pageInfo } = data.allMdx

    return (
        <Layout>
            <Seo title='blogs' />
            <div className='blogs'>
                <header>
                    <h1>Blogs</h1>
                    <p>{pageInfo.totalCount} - Articles</p>
                </header>
                <section className={BlogStyle.newestBlog}>
                    <header>
                        <h2>Newest Articles</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima ab nihil, neque culpa recusandae.</p>
                    </header>
                    { blogs && blogs.map(blog => {
                        const date = new Date(blog.frontmatter.date).getFullYear()
                        return (
                            date >= 2022 && (
                                <article key={blog.id} className={BlogStyle.blogItem}>
                                    <header className={BlogStyle.blogHeader}>
                                        <h3 className={BlogStyle.blogTitle}>
                                            <Link className='' to={`/blogs/${blog.slug}`}>
                                                {blog.frontmatter.title}
                                            </Link>
                                        </h3>
                                        <p className={BlogStyle.blogDate}>{blog.frontmatter.date}</p>
                                    </header>
                                    <div className={BlogStyle.blogContent}>
                                        <p>
                                            {blog.excerpt}
                                        </p>
                                    </div>
                                    <footer className={BlogStyle.blogFooter}>
                                        <p>
                                            <Link to={`/blogs/${blog.slug}`} className={BlogStyle.link}>Continue Reading...</Link>
                                        </p>
                                    </footer>
                                </article>
                            )
                        )}
                    )}
                </section>

                <section className={BlogStyle.oldestBlog}>
                    <header>
                        <h2>Oldest Articles</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima ab nihil, neque culpa recusandae.</p>
                    </header>
                    { blogs && blogs.map(blog => {
                        const date = new Date(blog.frontmatter.date).getFullYear()
                        return (
                            date < 2022 && (
                                <article key={blog.id} className={BlogStyle.blogItem}>
                                    <header className={BlogStyle.blogHeader}>
                                        <h3 className={BlogStyle.blogTitle}>
                                            <Link className='' to={`/blogs/${blog.slug}`}>
                                                {blog.frontmatter.title}
                                            </Link>
                                        </h3>
                                        <p className={BlogStyle.blogDate}>{blog.frontmatter.date}</p>
                                    </header>
                                    <div className={BlogStyle.blogContent}>
                                        <p>
                                            {blog.excerpt}
                                        </p>
                                    </div>
                                    <footer className={BlogStyle.blogFooter}>
                                        <p>
                                            <Link to={`/blogs/${blog.slug}`} className={BlogStyle.link}>Continue Reading...</Link>
                                        </p>
                                    </footer>
                                </article>
                            )
                        )}
                    )}
                </section>
                <section className={BlogStyle.pagination}>
                    <p>
                        {pageInfo.hasPreviousPage && <Link to={`/blogs/${pageInfo.currentPage - 1  === 1 ? '': pageInfo.currentPage - 1}`} rel="prev" className={BlogStyle.link}>Previous</Link>} {' '} {pageInfo.hasNextPage && <Link to={`/blogs/${pageInfo.currentPage + 1}`} rel="next" className={BlogStyle.link}>Next</Link>}
                    </p>
                </section>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($skip: Int, $limit: Int) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: $limit, skip: $skip) {
            nodes {
                id
                body
                frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
                }
                excerpt(truncate: true)
                slug
            }
            pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
                itemCount
                pageCount
                perPage
                totalCount
            }
        }
    }
`

export default Blogs