import CategoryCard from "../category-card/category-card.component";

import { CategoriesMenuContainer } from './categories-menu.styles';

const CategoriesMenu = ({ categories }) => {
  return (
    <CategoriesMenuContainer>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </CategoriesMenuContainer>
  );
};

export default CategoriesMenu;