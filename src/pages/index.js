import React from "react"
import { Link, graphql } from "gatsby"

const HomePage = ({ data }) => {
  const dates = data.allGoldPricesCsv.nodes

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Gold, Fine Gold & Silver Prices
      </h1>
      <ul className="list-disc pl-5">
        {dates.map((node, index) => (
          <li key={index}>
            <Link
              to={`/prices/${node.date}`}
              className="text-blue-500 hover:underline"
            >
              {node.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  {
    allGoldPricesCsv {
      nodes {
        date
      }
    }
  }
`

export default HomePage
