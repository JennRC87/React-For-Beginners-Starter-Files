import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render(){
    return (
      <div>
      <h2>Inventory</h2>
      <AddFishForm addFish={this.props.addFish} />
    {/*This is how to get the sample fish from the sample-fishes.js to load in the state in the props(console also line Inventoty props line 48(loadSample))*/}
      <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
