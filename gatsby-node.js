const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  const Portfolio = path.resolve('src/components/portfolio.js')

  return gaphql(`
  query loadPagesQuery ($limit: Int!) {
    allMarkdownRemark(limit: $limit){
      edges{
        node{
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `,{ limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
  })
}

result.data.allMarkdownRemark.eduges.forEach(edge => {
  createPage({
    path: `${edge.node.frontmatter.slug}`,
    component: Portfolio,
  })
})