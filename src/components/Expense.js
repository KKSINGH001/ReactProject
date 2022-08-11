import ExpenseItem from './ExpenseItem'
import './expense.css'
import ExpensesFilter from './ExpensesFilter'
import {useState} from 'react'

function Expense(props){

    const [year,setYear]=useState('2020')

    const changeFilter =(selectedYear)=>{
        console.log(`expense ${selectedYear}`)
        setYear(selectedYear)
    }

  
    const filteredExpenses = props.expense.filter((expense) => {
        console.log(expense.date)
        return (expense.date.getFullYear().toString()===year)
    })

    return (
       
        <div className='expense'>
        <ExpensesFilter onValueChange={year} onChangeFilter={changeFilter}/>
        {filteredExpenses.map( (expense)=>{return (<ExpenseItem key={expense.id} Title={expense.title} Amount={expense.amount} Date={expense.date}/> )} )}

        </div>
       
    )
}

export default Expense