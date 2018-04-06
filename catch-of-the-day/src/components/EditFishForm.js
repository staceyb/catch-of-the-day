import React, { Component } from 'react'
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  static propTypes = {
     index: PropTypes.string,
     updateFish: PropTypes.func,
     fish: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        desc: PropTypes.string,
        status: PropTypes.string,
        price: PropTypes.number,
     })
  }
  handleChange = (event) => {
   //console.log(event.currentTarget.value)
    //update that fish
    //1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish, 
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }
  render() {
    return <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} id="name" value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange}  id="price" value={this.props.fish.price}  />
        <select name="status" id="status" onChange={this.handleChange} value={this.props.fish.status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}  id="desc" cols="30" rows="10" />
        <input type="text" value={this.props.fish.image}  name="image" onChange={this.handleChange} id="image"  />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>;
  }
}

export default EditFishForm;
