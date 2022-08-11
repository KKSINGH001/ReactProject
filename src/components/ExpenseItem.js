import React, { useState } from 'react'
import './ExpenseItem.css'
import Card from './Card'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

    const [Title,setTitle]= useState(props.Title);
    const clickHandler=()=>
    {
        setTitle('Updated');
     
    }

  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date}/>
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">
          ${props.Amount}
        </div>
      </div>
      <button onClick= {clickHandler}> Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
