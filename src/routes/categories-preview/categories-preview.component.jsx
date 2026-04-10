import { useContext, Fragment } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../contexts/categories.context';

// Import the styled components
import { CategoriesPreviewContainer } from './categories-preview.styles.jsx';

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;