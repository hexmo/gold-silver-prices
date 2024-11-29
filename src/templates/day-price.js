import React from "react"
import { Link } from "gatsby"
import fineGoldImage from "../images/finegold.webp"
import standardGoldImage from "../images/standardgold.webp"
import silverImage from "../images/silver.webp"

const DayPrice = ({ pageContext }) => {
  const { date, fineGold, standardGold, silver, prev, next } = pageContext

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-6xl font-bold mb-64">Prices for {date}</h1>
      <div className="flex flex-row row-span-3">
        {/* Fine Gold */}
        <div className="mb-6">
          <img
            src={fineGoldImage}
            alt="Fine Gold Bar"
            className="mx-auto rounded shadow"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Fine Gold</h2>
          <p className="text-center">Price: NPR {fineGold}</p>
        </div>

        {/* Standard Gold */}
        <div className="mb-6">
          <img
            src={standardGoldImage}
            alt="Standard Gold Bar"
            className="w-64 mx-auto rounded shadow"
          />
          <h2 className="text-xl font-semibold text-center mt-4">
            Standard Gold
          </h2>
          <p className="text-center">Price: NPR {standardGold}</p>
        </div>

        {/* Silver */}
        <div className="mb-6">
          <img
            src={silverImage}
            alt="Silver Bar"
            className="w-64 mx-auto rounded shadow"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Silver</h2>
          <p className="text-center">Price: NPR {silver}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {prev ? (
          <Link
            to={`/prices/${prev.date}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Previous Day ({prev.date})
          </Link>
        ) : (
          <span className="text-gray-400">No Previous Day</span>
        )}

        {next ? (
          <Link
            to={`/prices/${next.date}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next Day ({next.date})
          </Link>
        ) : (
          <span className="text-gray-400">No Next Day</span>
        )}
      </div>
    </div>
  )
}

export default DayPrice
