import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  // constructor() {
  //   super();
  //   //console.log('Creating component');
  //   this.goToStore = this.goToStore.bind(this);
  // }

  // goToStore(event) {
  //   //Stop form from submitting
  //   event.preventDefault();
  //   //Get the text from the form input
  //   console.log(this);
  // }
  
  //Above is one way to make sure goToStore has this point 
  //pointing to current StorePicker app and below property is 
  //another way
  goToStore = (event) => {
    //Stop form from submitting
    event.preventDefault();
    //Get the text from the form input
    const storeName = this.myInput.value.value;
    //console.log(this.myInput.value.value);
    //Change the page to the /store/whateverwasentered
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return <form action="" className="store-selector" onSubmit={this.goToStore}>
        {/* Way to comment in JSX */}
        <h2>Please Enter a Store</h2>
        <input type="text" 
        required 
        ref={this.myInput}
        placeholder="Store name" 
        defaultValue={getFunName()} />
        <button type="submit">Visit Store-></button>
      </form>;
  }
}
