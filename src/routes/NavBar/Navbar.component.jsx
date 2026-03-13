
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/Logo.svg?react';
import './NavBar.styles.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/Firebase/firebase.utils";
const NavBar = () => {
  const {currentUser} = useContext(UserContext);

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

           {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}> SIGN OUT </span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN-IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;