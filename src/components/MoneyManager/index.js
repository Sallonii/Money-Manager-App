import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyDetailsList = [
  {
    img:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    text: 'Your Balance',
    altText: 'balance',
    amount: 0,
    cardColor: 'green',
  },
  {
    img:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    text: 'Your Income',
    altText: 'income',
    amount: 0,
    cardColor: 'blue',
  },
  {
    img:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    text: 'Your Expenses',
    altText: 'expenses',
    amount: 0,
    cardColor: 'purple',
  },
]

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="bg">
        <div className="card-container">
          <div className="hi-card">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <ul className="money-card-ul-container">
            {moneyDetailsList.map(eachItem => (
              <MoneyDetails moneyDetails={eachItem} />
            ))}
          </ul>
          <div className="form-container">
            <form>
              <h1>Add Transaction</h1>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
