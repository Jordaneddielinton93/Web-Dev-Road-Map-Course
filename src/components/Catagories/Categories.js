import CatagoriesSidebar from "../CatagoriesSidebar/CatagoriesSidebar"
import CategoriesItem from "../CategoriesItem/CategoriesItem"

import "./Categories.scss"
const Categories = () => {
  return ( 
    <main className="Catagories">
      <CatagoriesSidebar />
      <CategoriesItem />
      
    </main>
   );
}
 
export default Categories;