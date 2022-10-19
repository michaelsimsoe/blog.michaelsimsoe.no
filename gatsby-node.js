const path = require(`path`);
const readingTime = require(`reading-time`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ node, graphql, actions }) => {
  const { createPage, createNodeField } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  const result = await graphql(
    `
      {
        allMdx(
          filter: {frontmatter: {published: {eq: true}}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                published
              }
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.frontmatter.slug,
      component: `${blogPost}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
        post
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
};
