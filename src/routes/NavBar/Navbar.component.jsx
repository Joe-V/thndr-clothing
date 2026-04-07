
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg?react';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './NavBar.styles.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartItemsContext } from "../../contexts/cart_Items.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
const NavBar = () => {                                 
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartItemsContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

           {currentUser ? (
              <span className="nav-link" onClick={signOutUser}> SIGN OUT </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN-IN
              </Link>
            )}
            <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;