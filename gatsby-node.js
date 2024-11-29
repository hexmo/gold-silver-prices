const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allGoldPricesCsv(sort: { fields: date, order: ASC }) {
        nodes {
          date
          fine_gold
          standard_gold
          silver
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    throw new Error("Failed to fetch data from CSV")
  }

  const nodes = result.data.allGoldPricesCsv.nodes
  const dayPriceTemplate = path.resolve(`src/templates/day-price.js`)

  nodes.forEach((node, index) => {
    const prevNode = index > 0 ? nodes[index - 1] : null
    const nextNode = index < nodes.length - 1 ? nodes[index + 1] : null

    createPage({
      path: `/prices/${node.date}`,
      component: dayPriceTemplate,
      context: {
        date: node.date,
        fineGold: node.fine_gold,
        standardGold: node.standard_gold,
        silver: node.silver,
        prev: prevNode ? { date: prevNode.date } : null,
        next: nextNode ? { date: nextNode.date } : null,
      },
    })
  })
}
