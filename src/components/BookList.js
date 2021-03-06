import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


//...............Class component..........................//


// class BookList extends Component {

//   static contextType = ThemeContext;

//   render() {

//     const {isLightTheme, light, dark} = this.context;
//     const theme = isLightTheme? light: dark;
//     return (
//       <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
//         <ul>
//            <li style={{background: theme.ui}}>The way of kings</li>
//            <li style={{background: theme.ui}}>The name of the winds</li>
//            <li style={{background: theme.ui}}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookList;




//...............functional component..........................//



const BookList = () => {

  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme? light : dark;

  return ( 
      <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
        <ul>
           <li style={{background: theme.ui}}>The way of kings</li>
           <li style={{background: theme.ui}}>The name of the winds</li>
           <li style={{background: theme.ui}}>the final empire</li>
        </ul>
      </div>
    
   );
}
 
export default BookList;