import React, { Component } from "react"
import WaterfallCard from "../components/WaterfallCard"


function WaterfallCollection (props) {

  const displayCollection = () => {
    return props.waterfalls.map(waterfall => {
      return(
        <WaterfallCard
          waterfall={waterfall}
        />
      )
    })
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayCollection()}
      </div>
    </div>
  )

}

export default WaterfallCollection
