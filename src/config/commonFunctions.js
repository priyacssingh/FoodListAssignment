export const searchFoodList = (searchedValue, foodList) => {
  let items = null
  const updatedFoodList =  JSON.parse(JSON.stringify(foodList))
   updatedFoodList.map((catName) => {
    catName.category.subcategories.map((subCatName) => {
    items = subCatName.items.filter((subCatItemsName) => (subCatItemsName.startsWith(searchedValue)))
    subCatName.items = items.slice(0);
    })
     if (items.length >= 1) {
       return catName
     } else {
       delete catName.category
     }
   })
   return updatedFoodList
}