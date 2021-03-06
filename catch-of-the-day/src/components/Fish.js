import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

export default class Fish extends Component {
  static propTypes = {
      details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
      }),
      addToOrder: PropTypes.func.isRequired
  };
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {
    let {image, name, price, desc, status} = this.props.details;
    const isAvailable = status === 'available';
    image = process.env.PUBLIC_URL + image;
    return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">{name}</h3>
      <span className="price">{formatPrice(price)}</span>
      <p>{desc}</p>
      <button onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add to Cart': 'Sold Out'}</button>
    </li>
    )
  }
}

