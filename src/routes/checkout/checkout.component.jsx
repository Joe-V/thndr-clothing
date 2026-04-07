import './checkout.styles.scss';
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart_Items.context';
import CheckoutItem from '../../components/checkout-item/checkout_item.component';

const Checkout = () => {
    const {cartItems , total} = useContext(CartItemsContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                );
            })}
            <span className='total'>Total: {total}$</span>
        </div>
    );
}

export default Checkout;