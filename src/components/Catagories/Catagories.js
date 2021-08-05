import CatagoriesSidebar from "../CatagoriesSidebar/CatagoriesSidebar"
import CategoriesItem from "../CategoriesItem/CategoriesItem"
import "./Catagories.scss"
const Catagories = ({state}) => {
  return ( 
    <main className="Catagories">
      <CatagoriesSidebar state={state} />
      <CategoriesItem state={state} />
    </main>
   );
}
 
export default Catagories;