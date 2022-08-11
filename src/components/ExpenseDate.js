import './ExpenseDate.css'

function ExpenseDate(props){
    const days= props.Date.toLocaleString('en-US', {day: '2-digit'})
    const month= props.Date.toLocaleString('en-US', {month: 'long'})
    const year= props.Date.getFullYear()

    return (
        <div className="expense-date">
        <div className="expense-date__day">{days}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    );

}

export default ExpenseDate;