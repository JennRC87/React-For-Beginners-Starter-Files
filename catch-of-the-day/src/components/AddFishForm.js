import React from 'react'

class AddFishForm extends React.Component {
  // when the submit button is pushed it will take the fish object and put it into an object for us (lines 5-16, 11(on submit))
  createFish(event) {
    event.preventDefault();
    console.log('Gonna make some fish!🐟 ');

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    // console.log(fish);
    this.props.addFish(fish);
    // lines 19 + ref in line 24 so the form resets
    this.fishForm.reset();
  }

   render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name =input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price =input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status =input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc =input} placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image =input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
}

export default AddFishForm;
