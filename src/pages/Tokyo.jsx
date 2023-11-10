import React from 'react'
import AllRest from '../components/AllRest'
import ItemComponent from '../components/ItemComponent'
import Categories from '../components/Categories'

export default function Tokyo({addOrders, filteredItems, setFilteredItems, categories, setCategories}) {

  return (
    <div>
      <AllRest/>
      <main>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <h3 className="text-center text-uppercase" style={{fontWeight: "800"}}>Токио</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-4 col-12 mb-3" style={{fontSize: "14px"}}>
                <div className="oval text-center textPhone">Ресторан <span className="fat">ОТКРЫТ</span></div>
            </div>
            <div className="col-xl-4 col-12 mb-3" style={{fontSize: "14px"}}>
                <div className="oval text-center textPhone">Бесплатная доставка <span className="fat">от 1000р.</span></div>
            </div>
            <div className="col-xl-4 col-12 mb-3" style={{fontSize: "14px"}}>
                <div className="oval text-center textPhone">Платная доставка <span className="fat">120р.</span></div>
            </div>
        </div>
        <div className="row mt-4"> 
        
        
        {categories.length > 0
          ? categories.map((category) => (
              <Categories key={category.key} category={category} setCategories={setCategories} setFilteredItems ={setFilteredItems} />
            ))
        
          :<h2>NOT FOUND</h2>
        }
      </div>
      <div className="row">
        
      

        {filteredItems.length > 0
          ? filteredItems.map((item) => (
              <ItemComponent key={item.id} item={item} addOrders={addOrders} categories={categories} />
            ))
      
          :<h2>NOT FOUND</h2>
        }
      </div>
      </div>
      </main>
      </div>
  )
}
