import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props) => {
  //function for clickhandler()
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  

  
  const clickHandler = () => {
    setTitle('updated!');
    setAmount(100)
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;