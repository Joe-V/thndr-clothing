import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  Name,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;