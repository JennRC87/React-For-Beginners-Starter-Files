import React from 'react';
// this how he changed 1000 to $10.00 on the helpers.js he took the one function instead of linking the whole page and changed the span on line 16
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    // const details = this.props.details;
    // or this works to (don't look at index)
    const { details, index } = this.props;
    const isAvailable = details.status == 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

    return (
      <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
    {/*is the fish is unavailable hide the button also line 10-11, he used css to apply the sold out sticker*/}
      <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;
