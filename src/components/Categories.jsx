import React from 'react'

export default function Categories({category, setFilteredItems}) {

    const searchItem = () => {
        if (category.key !== "all"){
        fetch(`http://localhost:3001/items?category=${category.key}`)
        .then((response) => response.json())
        .then((data) => {
          setFilteredItems(data);
        })
        .catch((error) => {
          console.error('Ошибка при запросе данных:', error);
        });
      }
    else{
        fetch(`http://localhost:3001/items`)
        .then((response) => response.json())
        .then((data) => {
          setFilteredItems(data);
        })
        .catch((error) => {
          console.error('Ошибка при запросе данных:', error);
        });  
    }};
  return (
 
        
          <div className="col-12 col-xl-1 mb-3 me-auto me-xl-4 restaurants" style={{borderRadius: "15px", fontSize: "14px"}} onClick={searchItem}>
             <img src={"./img/" + category.image} alt="" className="menu"/>
            <p className="text-center textPhone" key={category.key}>{category.name}</p>
           </div>
         
    

      
  )
}
