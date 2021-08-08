import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";
const SearchCategorie = (userInput) => {

  userInput = userInput.toLocaleLowerCase()
  
  let ArrayOfSearchedItem = CategoriesApi.filter((objectItem,index)=>{
    if(
      objectItem.title1.toLocaleLowerCase().includes(userInput)
      ||
      objectItem.title.toLocaleLowerCase().includes(userInput)
    ){
      return [objectItem.title1,objectItem.title]
    }
  })
  console.log(ArrayOfSearchedItem)
  return {ArrayOfSearchedItem};
}
 
export default SearchCategorie;