var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({} , recipes, { [key]: value}) 
 }
 
<<<<<<< HEAD
 function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
   recipes[key] = value
   return recipes 
   
 }
 
  function deleteFromObjectByKey(recipes, key) {
        var newObj =  Object.assign({} , recipes) 
        delete newObj[key];
      return newObj ;
 } 
 
 function destructivelyDeleteFromObjectByKey(recipes, key) {
   delete recipes[key];
   return recipes
 }
=======
 function 
>>>>>>> b317b548df84f0547283af87f2771f398652db04
