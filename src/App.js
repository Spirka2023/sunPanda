import { BrowserRouter, Route, Routes , useNavigate} from "react-router-dom";
import React , { useEffect, useState } from 'react'
import Tokyo from "./pages/Tokyo"
import Orders from "./pages/Orders";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch('http://localhost:3001/categories')
      const cat = await response.json()
      setCategories(cat)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch('http://localhost:3001/items')
      const data = await response.json()
      setFilteredItems(data)
    }
    fetchData()
  }, [])

  const addOrders = (item) =>{
    let isInArr
    orders.forEach(el =>{
      if(el.id === item.id)
      isInArr = true
    })
    if(!isInArr)
    setOrders((prevOrders) => [...prevOrders, item]); 
  }

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Header  filteredItems={filteredItems} orders={orders} deleteOrder={deleteOrder} setOrders={setOrders}/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/tokyo" element={<Tokyo addOrders ={addOrders} filteredItems={filteredItems} setFilteredItems={setFilteredItems} categories={categories} setCategories={setCategories}/>}/>
        <Route path="/orders" element={<Orders deleteOrder={deleteOrder} setOrders={setOrders} />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
