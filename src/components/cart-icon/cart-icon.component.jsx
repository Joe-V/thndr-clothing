import { useContext } from "react";
import { CartItemsContext } from "../../contexts/cart_Items.context";

// Import our new styled components
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartItemsContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;