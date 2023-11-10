import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"

export default function Order({item, updateOrder, deleteOrder}) {
  const handleIncrement = () => {
    // Вызываем функцию updateOrder и передаем обновленный объект заказа с увеличенным счетчиком
    updateOrder({ ...item, count: item.count + 1 });
  };
  const handleDecrement = () => {
    // Вызываем функцию updateOrder и передаем обновленный объект заказа с увеличенным счетчиком
    const updatedCount = item.count - 1;
  
  if (updatedCount > 0) {
    // Если count больше 0, вызываем функцию updateOrder с обновленным объектом заказа
    updateOrder({ ...item, count: updatedCount });
  } else {
    // Если count стало 0, вызываем функцию deleteOrder для удаления заказа
    deleteOrder(item.id);
  }
  };

  
  return (

<div className='row'>
<div className='row'>
<div className='col-2'><img src={'./img/' + item.img} className='img-fluid'/></div>
<div className='col-8'><h4 className='text-center'>{item.name}</h4></div>
<div className='col-2'><p>{item.price * item.count}р.</p>
</div>
</div>
<div className='row'>
<div className='col-2'></div>
<div className='col-8'>
<div className='row'>
<div className='col-5'>
<div className='plusMinus'  onClick={handleIncrement}>+</div>
</div>
<div className='col-2'>{item.count}</div>
<div className='col-5'>
<div className='plusMinus' onClick={handleDecrement}>-</div>
</div>
</div>
</div>
<div className='col-2'>
<FaTrashAlt className='delete-icon' onClick={() => deleteOrder(item.id)}/>
</div>
</div>
</div>
  )
}
