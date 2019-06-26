exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query BeardQuery {
      allBeardsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const beards = result.data.allBeardsJson.edges

  beards.forEach(({ node: beard }) => {
    const slug = beard.slug
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve("./src/templates/beard-template.js"),
      context: { slug },
    })
  })
}
