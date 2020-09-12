import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// class Nav extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(themeContext) => {
//                 const { isLightTheme, light, dark } = themeContext;
//                 const { isAuthenticated, toggleAuth } = authContext;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                   <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h1>Context Api</h1>
//                     <div onClick={toggleAuth}>
//                         {!isAuthenticated?"Logged In" : "Logged out"}
//                     </div>
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Nav;

const Nav = () => {

  const { isLightTheme, light, dark} = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth} = useContext(AuthContext);

  const theme =  isLightTheme? light: dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context Api</h1>
      <div onClick={toggleAuth}>
        {!isAuthenticated ? "Logged In" : "Logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
