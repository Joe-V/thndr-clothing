import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none; // Link standard styling removal
  color: black;

  &:hover {
    color: grey;
  }
`;

export const Preview = styled.div`
  display: grid; // Changed from flex to grid to match your grid columns rule
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;