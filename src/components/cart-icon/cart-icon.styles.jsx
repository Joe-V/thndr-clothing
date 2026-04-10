import styled from 'styled-components';

// We import the SVG component here so we can style it
import ShoppingBagSvg from '../../assets/shopping-bag.svg?react';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// Styling the SVG directly
export const ShoppingIcon = styled(ShoppingBagSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 12px;
  font-family: 'Open Sans Condensed', sans-serif;
`;