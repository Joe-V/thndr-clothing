// category-card.component.jsx
import {
  CategoryCardContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from './category-card.styles';

const CategoryCard = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <CategoryCardContainer>
      {/* Change imageUrl={imageUrl} to $imageUrl={imageUrl} */}
      <BackgroundImage $imageUrl={imageUrl} />
      
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCard;