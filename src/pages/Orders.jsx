import React, {useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


export default function Orders({setOrders}) {
    const navigate = useNavigate();
  const location = useLocation();
  const initialOrders = location.state.orders || [];
  const [orders, setLocalOrders] = useState(initialOrders);

  const updateOrder = (updatedOrder) => {
    setLocalOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    );
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    );
  };

  const handleIncrement = (item) => {
    updateOrder({ ...item, count: item.count + 1 });
    
  };

 const handleDecrement = (item) => {
    const updatedCount = item.count - 1;

    if (updatedCount > 0) {
      updateOrder({ ...item, count: updatedCount });
    } else {
      const filteredOrders = orders.filter((order) => order.id !== item.id);
      setLocalOrders(filteredOrders);
      setOrders(filteredOrders);
    }
  };
  
  const handleDelete = (item) => {
    const filteredOrders = orders.filter((order) => order.id !== item.id);
    setLocalOrders(filteredOrders);
    setOrders(filteredOrders);
  };

  const handleBack = () => {
    navigate("/tokyo", { state: { orders } });
  };


  let summa = 0;
    orders.forEach(el => summa += Number.parseFloat(el.price * el.count))

  return (<section className='allRest mt-5'>
 <div className="container">
        <div className="row">
            <div className="col-12" onClick={handleBack}>
                <a class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                <h4 className="d-inline-block align-text-top">Вернуться в ресторан</h4></a>
            </div>
        </div>
    </div>
    <div className="container mb-3">
    <div className="row">
        <div className="col-12">
            <h3 className="text-center" style={{fontWeight: "800"}}>Оформление заказа</h3>
        </div>
    </div>
</div>


<div className="container">

    <div className="row">
        <div className="col-lg-7 col-12 me-5" style={{backgroundColor: "white"}}>

            <div className="row mt-3 mb-2">
              
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <div className="form-row">
                <input type="text" id="email" required autocomplete="off"/><label for="email">Введите ваше имя</label>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-6">
                <div className="form-row">
                <input type="phone" id="password" required autocomplete="off"/><label for="password">Ваш номер телефона</label>
                </div>
                </div>
                <div className="col-lg-8 col-6">
                    <a href="#" className="btn btn-secondary btnChoose text-uppercase">Выслать код подтверждения</a>
                </div>
                </div>

                <div className="form-row">
                    <input id="password" required autocomplete="off"/><label for="password">Адрес доставки</label>
                    </div>

                    <select className="form-select mySelect mb-5" aria-label="Default select example">
                        <option selected style={{color: "black"}}>Картой при доставке</option>
                        <option value="1" style={{color: "black"}}>Наличными при доставке</option>
                        
                      </select>

                      <div className="row">
                        <div className="col-3">
                    <div className="form-row">
                    <input type="text" id="password" required autocomplete="off"/><label for="password">Подъезд</label>
                    </div>
                    </div>

                    <div className="col-3">
                        <div className="form-row">
                        <input type="text" id="password" required autocomplete="off"/><label for="password">Домофон</label>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-row">
                        <input type="text" id="password" required autocomplete="off"/><label for="password">Этаж</label>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-row">
                        <input type="text" id="password" required autocomplete="off"/><label for="password">Квартира</label>
                        </div>
                    </div>
                        
                    </div>

                    <div className="form-floating mb-4">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px", backgroundColor: "#efecec"}}></textarea>
                        <label for="floatingTextarea2" style={{color: "#868686"}}>Комментарий</label>
                      </div>
                    
                      <div className="form-row">
                        <input type="password" id="password" required autocomplete="off"/><label for="password">Промокод</label>
                        </div>

                        <a href="index.html" className="btn btn-itd2 btn-lg text-uppercase delivery" style={{fontWeight: "bold"}}>Заказать</a>


          </div>
    </div>        

        </div>
        <div className="col-9 col-lg-4 mt-5 mt-lg-0 ms-5 ms-lg-0">
            <div className="row">
                <div className="col-12">
                    Ваш заказ в ресторане
                </div>
                <div className="col-12">
                    ТОКИО
                </div>
            </div>
            
            <hr/>
            {orders.length > 0
          ? orders.map((item) => (
            <div className="row" key={item.id}>
         
            <div className="col-2">
                <img src={"./img/"+item.img} alt="" className="img-fluid" style={{marginLeft: "10px"}}></img>
            </div>
            <div className="col-8">
                <div className="col-12">{item.name}</div>
                <div className="col-12">Добавка: </div>
                <div className="row">
                <div className='col-4 plusMinus' onClick={() => handleIncrement(item)}>+</div>
                    <div className="col-4 text-center">{item.count}</div>
                    <div className='col-4 plusMinus' onClick={() => handleDecrement(item)}>-</div>
                </div>
            </div>
            <div className="col-2">
                <div className="col-12">{item.price * item.count}</div>
                <div className="col-12" onClick={() => handleDelete(item)}><FaTrashAlt className='delete-icon'/></div>
            </div>
        </div> 
            ))
          : <div className='container'><div className='row'><div className='col-12'><img src='./img/notFound.jfif' className='img-fluid'/></div></div></div>
        }
            
            <div className="row mt-5">
                <div className="col-8 me-5">Доставка: </div>
                <div className="col-2">120</div>
            </div>

            <div className="row mt-5">
                <div className="col-8 me-5"><h4>Итого </h4></div>
                <div className="col-2"><h4>{new Intl.NumberFormat().format(summa + 120)}р</h4></div>
            </div>
            
        </div>
    </div>

    
</div>
</section>

  )
}
