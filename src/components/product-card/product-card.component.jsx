import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/cart_Items.context';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
  AddButton,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartItemsContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddButton 
        buttonType='inverted' 
        onClick={addProductToCart}
      >
        Add to cart
      </AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;