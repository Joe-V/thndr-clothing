import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
  }
`;