import CatagoriesSidebar from "../CatagoriesSidebar/CatagoriesSidebar"
import CategoriesItem from "../CategoriesItem/CategoriesItem"
import "./Catagories.scss"
const Catagories = () => {
  return ( 
    <main className="Catagories">
      <CatagoriesSidebar />
      <CategoriesItem />
    </main>
   );
}
 
export default Catagories;