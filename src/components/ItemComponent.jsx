import React from 'react'

export default function ItemComponent({item, addOrders}) {
  const handleAddClick = () => {
    addOrders(item);
  };
  return (

<div className="col-12 col-xl-2 col-md-3 mb-3 me-4 restaurants">
                <div className="image-container" data-content={item.desc}>
                    <img src={"./img/"+item.img} className="img-fluid" style={{borderRadius:"3%"}}/>
                    <p className="text-center mt-2 fat textPhone">{item.name}</p>
                    
                </div>
                <a className="btn btn-itd2 btn-lg mb-3 delivery text-white textPhone" onClick={handleAddClick}>В корзину {item.price} р.</a>
            </div>

  )
}