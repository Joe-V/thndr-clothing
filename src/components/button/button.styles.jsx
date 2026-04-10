import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px; /* Adjusting padding for standard look */
  font-size: 13px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

// Extends BaseButton styles but overrides specific colors for Google
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

// Extends BaseButton styles but starts with the inverted look
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;