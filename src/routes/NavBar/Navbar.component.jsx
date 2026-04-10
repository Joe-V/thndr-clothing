import { useContext, Fragment } from "react";
import { Outlet } from "react-router-dom";

import Logo from '../../assets/Logo.svg?react'; 
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartItemsContext } from "../../contexts/cart_Items.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";

import { 
  NavigationContainer, 
  NavLinks, 
  NavLink, 
  LogoContainer 
} from "./NavBar.styles.jsx";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartItemsContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN-IN</NavLink>
          )}
          
          <CartIcon />
        </NavLinks>
        
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      
      <Outlet />
    </Fragment>
  );
};

export default NavBar;