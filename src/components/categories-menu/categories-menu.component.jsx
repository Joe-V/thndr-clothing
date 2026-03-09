import CategoryCard  from "../category-card/category-card.component";   
import './categories-menu.styles.scss';

const CategoriesMenu = ({categories}) => {
    return(
            <div className="categories-container" >
      {categories.map((category) => {
        return (
          <CategoryCard key={category.id} category={category}/>
        );
      })}
    </div>
    );
}

export default CategoriesMenu;