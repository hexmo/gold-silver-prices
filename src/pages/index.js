import React from "react"
import { Link, graphql } from "gatsby"
import "../styles/HomePage.css" // Import CSS for styling

const HomePage = ({ data }) => {
  const dates = data.allGoldPricesCsv.nodes.reverse() // Reverse the order of dates

  return (
    <div className="container">
      <h1 className="title">Gold, Fine Gold & Silver Prices</h1>
      <table className="prices-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((node, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{node.date}</td>
              <td>
                <Link to={`/prices/${node.date}`} className="date-link">
                  View Prices
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
