import React from 'react';
import PropTypes from 'prop-types';

const Header =  (props) => {
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
       <h3 className="tagLine">
         <span>{props.tagline}</span>
       </h3>
     </header>
   );
}


Header.propTypes = {
  tagline: PropTypes.string.isRequired
}
export default Header;

//Same as below but since Header does not have state can change
//this to above which is a stateless functional component
// export default class Header extends Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>Catch
//         <span className="ofThe">
//           <span className="of">of</span> 
//           <span className="the">the</span>
//         </span>
//           Day
//         </h1>
//         <h3 className="tagLine">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }
