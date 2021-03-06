import React from 'react';


const Header = (props) => {
    return (
      <header className="top">
        <h1>
        Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
        Day
        </h1>
        {/*this. is the component(Header), props is the object that is given to us (shown in the react console) tagline is what is being called*/}
        <h3 className="tagline"><span>{props.tagline}</span></h3>
      </header>
    )
}

Header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}

export default Header;
