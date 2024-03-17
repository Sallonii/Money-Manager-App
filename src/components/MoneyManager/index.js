import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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

const moneyDetails = [
  {
    id: 'balance',
    moneyType: 'Your Balance',
    amount: 0,
    classname: 'balance',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
  },
  {
    id: 'income',
    moneyType: 'Your Income',
    amount: 0,
    classname: 'income',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
  },
  {
    id: 'expenses',
    moneyType: 'Your Expenses',
    amount: 0,
    classname: 'expenses',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    displayText: transactionTypeOptions[0].displayText,
    moneyDetailsList: moneyDetails,
  }

  onChangingTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangingAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangingType = event => {
    this.setState({displayText: event.target.value})
  }

  getbalance = () => {
    const {transactionList} = this.state

    let income = 0
    let expense = 0

    transactionList.forEach(eachTransaction => {
      if (
        eachTransaction.displayText === transactionTypeOptions[0].displayText
      ) {
        income += eachTransaction.amount
      } else {
        expense += eachTransaction.amount
      }
    })

    const balance = income - expense

    const updatedMoneyDetails = moneyDetails.map(eachItem => {
      if (eachItem.id === 'income') {
        return {...eachItem, amount: income}
      }
      if (eachItem.id === 'expenses') {
        return {...eachItem, amount: expense}
      }
      if (eachItem.id === 'balance') {
        return {...eachItem, amount: balance}
      }
      return eachItem
    })

    this.setState({moneyDetailsList: updatedMoneyDetails})
  }

  onAddingTransaction = event => {
    event.preventDefault()
    const {title, amount, displayText} = this.state

    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      displayText,
    }

    this.setState(
      prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
      }),
      this.getbalance,
    )
  }

  renderUserName = () => (
    <div className="intro-container">
      <h1>Hi, Richard</h1>
      <p>
        Welcome back to your <span>Money Manager</span>
      </p>
    </div>
  )

  renderMoneyDetails = () => {
    const {moneyDetailsList} = this.state
    return (
      <div className="balance-income-expenses-container">
        {moneyDetailsList.map(eachItem => (
          <MoneyDetails moneyTypeDetails={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }

  renderAddTransaction = () => {
    const {title, amount} = this.state
    return (
      <div className="add-transaction-container">
        <form onSubmit={this.onAddingTransaction}>
          <h1 className="heading">Add Transaction</h1>
          <div className="input-label-items-container">
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              placeholder="TITLE"
              type="textbox"
              onChange={this.onChangingTitle}
              value={title}
            />
          </div>
          <div className="input-label-items-container">
            <label htmlFor="title">AMOUNT</label>
            <input
              id="title"
              placeholder="AMOUNT"
              type="textbox"
              onChange={this.onChangingAmount}
              value={amount}
            />
          </div>
          <div className="input-label-items-container">
            <p>TYPE</p>
            <select onChange={this.onChangingType}>
              {transactionTypeOptions.map(eachItem => (
                <option id={eachItem.optionId}>{eachItem.displayText}</option>
              ))}
            </select>
          </div>
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }

  deleteHistoryItem = id => {
    this.setState(
      prevState => ({
        transactionList: prevState.transactionList.filter(
          eachTransaction => eachTransaction.id !== id,
        ),
      }),
      this.getbalance,
    )
  }

  renderHistory = () => {
    const {transactionList} = this.state

    return (
      <div className="history-container">
        <h1 className="heading">History</h1>
        <div className="history-header">
          <p className="history-heading">Title</p>
          <p className="history-heading">Amount</p>
          <p className="history-heading">Type</p>
          <div>
            <p className="extra-space">Hi</p>
          </div>
        </div>
        <div>
          {transactionList.map(eachTransaction => (
            <TransactionItem
              transactionDetails={eachTransaction}
              key={eachTransaction.id}
              deleteHistoryItem={this.deleteHistoryItem}
            />
          ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="content-container">
          {this.renderUserName()}
          {this.renderMoneyDetails()}
          <div className="add-transaction-and-history-container">
            {this.renderAddTransaction()}
            {this.renderHistory()}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
