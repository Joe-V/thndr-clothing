import { useNavigate } from 'react-router-dom';

import {
  CategoryCardContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from './category-card.styles';

const CategoryCard = ({ category }) => {
  const { imageUrl, title , route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryCardContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p >Shop Now</p>
      </CategoryBodyContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCard;