import Cart from '../../assets/shopping-bag.svg?react';
import './cart-icon.styles.scss';


const CartIcon = () => {
    return(
        <div className='cart-icon-container'>
            <Cart className='cart-icon'/>
            <span className='items-count'>0</span>
        </div>
    )
}


export default CartIcon;