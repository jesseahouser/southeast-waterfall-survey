import React, { Component } from "react";
import WaterfallCollection from "./WaterfallCollection"

const waterfallsUrl = "http://localhost:9393/waterfalls"

class WaterfallsPage extends Component {

  state = {
    waterfalls: []
  }

  componentDidMount() {
    fetch(waterfallsUrl)
      .then(response => response.json())
      .then(data => this.setState({waterfalls:data}))
  }


  render() {
    return (
      <div>
        <h1 id="page-title" className="title">Southeast Waterfall Database</h1>
        <WaterfallCollection
          waterfalls={this.state.waterfalls}
        />
      </div>
    )
  }

}

export default WaterfallsPage