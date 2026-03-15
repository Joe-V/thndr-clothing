import { useContext } from "react";
import { CartItemsContext } from "../../contexts/cart_Items.context";
import Cart from '../../assets/shopping-bag.svg?react';
import './cart-icon.styles.scss';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartItemsContext);


    return(
        <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
            <Cart className='cart-icon'/>
            <span className='items-count'>0</span>
        </div>
    )
}


export default CartIcon;