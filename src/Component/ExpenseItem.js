import './ExpenseItem.css';

function ExpenseItem () {
    const expenseDate = new Date(2021,2,28);
    const expenseTitle = 'Car Insure';
    const expenseAmount = 2000
    const expenselocation = 'Jaipur';
    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div>{expenselocation}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>Rs{expenseAmount}</div>
            </div>
        </div>
        
    );
}

export default ExpenseItem;