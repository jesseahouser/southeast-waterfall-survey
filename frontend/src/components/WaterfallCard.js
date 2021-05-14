import React from "react"

const WaterfallCard = props => {

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.waterfall.id}
        >
        <div className="image">
          <img
            alt="waterfall"
            src={props.waterfall.photo}
          />
        </div>
        <div className="content">
          <div className="header">
            {props.waterfall.name}
            {/* <i className={botTypeClasses[props.bot.bot_class]} /> */}
          </div>
          <div className="meta text-wrap">
            {/* <small>{props.bot.catchphrase}</small> */}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default WaterfallCard
