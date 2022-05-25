import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2022, 4, 29).toDateString();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 378.38;


  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
          <h2>{expenseTitle}</h2>
          <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
