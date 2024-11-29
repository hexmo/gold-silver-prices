import React from "react"
import { Link } from "gatsby"
import fineGoldImage from "../images/finegold.webp"
import standardGoldImage from "../images/standardgold.webp"
import silverImage from "../images/silver.webp"
import { AiFillHome } from "react-icons/ai" // Import Home icon from react-icons
import "../styles/DayPrice.css" // Import the CSS file

const DayPrice = ({ pageContext }) => {
  const { date, fineGold, standardGold, silver, prev, next } = pageContext

  return (
    <div className="container">
      {/* Header with Home Icon */}
      <div className="header">
        <Link to="/" className="home-link">
          <AiFillHome className="home-icon" />
        </Link>
        <h1 className="page-title">Prices for {date}</h1>
      </div>

      {/* Prices Section */}
      <div className="prices-grid">
        {/* Fine Gold Section */}
        <div className="price-card">
          <div className="sparkle-animation gold-sparkle">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                style={{
                  "--i": i,
                  "--x": Math.random() * 2 - 1, // Random horizontal direction
                  "--y": Math.random() * 2 - 1, // Random vertical direction
                }}
              ></span>
            ))}
          </div>
          <img
            src={fineGoldImage}
            alt="Fine Gold Bar"
            className="price-image"
          />
          <h2 className="price-title">Fine Gold</h2>
          <p className="price-value">Price: NPR {fineGold} (per tola)</p>
        </div>

        {/* Standard Gold Section */}
        <div className="price-card">
          <div className="sparkle-animation gold-sparkle">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                style={{
                  "--i": i,
                  "--x": Math.random() * 2 - 1,
                  "--y": Math.random() * 2 - 1,
                }}
              ></span>
            ))}
          </div>
          <img
            src={standardGoldImage}
            alt="Standard Gold Bar"
            className="price-image"
          />
          <h2 className="price-title">Standard Gold</h2>
          <p className="price-value">Price: NPR {standardGold} (per tola)</p>
        </div>

        {/* Silver Section */}
        <div className="price-card">
          <div className="sparkle-animation silver-sparkle">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                style={{
                  "--i": i,
                  "--x": Math.random() * 2 - 1,
                  "--y": Math.random() * 2 - 1,
                }}
              ></span>
            ))}
          </div>
          <img src={silverImage} alt="Silver Bar" className="price-image" />
          <h2 className="price-title">Silver</h2>
          <p className="price-value">Price: NPR {silver} (per tola)</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        {prev ? (
          <Link to={`/prices/${prev.date}`} className="nav-button">
            Previous Day ({prev.date})
          </Link>
        ) : (
          <span className="nav-disabled">No Previous Day</span>
        )}

        {next ? (
          <Link to={`/prices/${next.date}`} className="nav-button">
            Next Day ({next.date})
          </Link>
        ) : (
          <span className="nav-disabled">No Next Day</span>
        )}
      </div>
    </div>
  )
}

export default DayPrice
