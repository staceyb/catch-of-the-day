import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base'

export default class App extends Component {

  state = { fishes: {}, order: {} };

  componentDidMount() {
    const { params } = this.props.match;
    //First reinstate any orders from localStorage
    const localStorageRef = JSON.parse(localStorage.getItem(params.storeId));
    if (localStorageRef) {
      this.setState({order: localStorageRef})
    }
    this.ref = base.syncState(
      `${params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes'
      }
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }


  addFish = fish => {
    //Take a copy of existing state - rule never change state directly
    const fishes = { ...this.state.fishes };
    //Add our new fish to the fishes
    fishes[`fish${Date.now()}`] = fish;

    //Set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  updateFish = (key, updatedFish) => {
      //Take a copy of existing state - rule never change state directly
      const fishes = { ...this.state.fishes };
      //Add our new fish to the fishes
      fishes[key] = updatedFish;

      //Set the new fishes object to state
      this.setState({ fishes });
  };

  deleteFish = (key) => {
    //Take a copy of existing state - rule never change state directly
    const fishes = { ...this.state.fishes };
    //Add our new fish to the fishes
    fishes[key] = null;

    //Set the new fishes object to state
    this.setState({fishes});
  }

  deleteOrderItem = (key) => {
    //Take a copy of existing state - rule never change state directly
    const order = { ...this.state.order };
    //Add our new fish to the fishes
    delete order[key];

    //Set the new fishes object to state
    this.setState({
      order
    });
  }

  loadSampleFishes = () => {
    console.log('Load Fishes');
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    //Set the new object object to state
    this.setState({ order: order });
  };

  render() {
    return <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order 
           fishes={this.state.fishes} 
           order={this.state.order}
           deleteOrderItem={this.deleteOrderItem} 
        />
        <Inventory 
           addFish={this.addFish} 
           updateFish={this.updateFish} 
           deleteFish={this.deleteFish} 
           loadSampleFishes={this.loadSampleFishes} 
           fishes={this.state.fishes} 
           storeId={this.props.match.params.storeId}
        />
      </div>;
  }
}
