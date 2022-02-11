exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  
  const response = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
      }
    }
  `)
  
  const { nodes: blogs } = response.data.allMdx

  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: require.resolve('./src/templates/blog.jsx'),
      context: {
        blog
      },
      defer: true
    })
  })

  const perPage = 4
  const pageCount = Math.ceil(blogs.length / perPage)

  Array.from({ length: pageCount }).forEach((_, i) => {
    const page = i + 1
    createPage({
      path: page === 1 ? `/blogs`: `/blogs/${page}`,
      component: require.resolve('./src/templates/blogs.jsx'),
      context: {
        skip: (page - 1) * perPage,
        limit: perPage,
        currentPage: page,
        pageCount
      },
      defer: true
    })
  })
}