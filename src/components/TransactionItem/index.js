import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteHistoryItem} = props
  const {id, title, amount, displayText} = transactionDetails

  const onClickingDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <div className="history-header">
      <p className="history-values">{title}</p>
      <p className="history-values">{amount}</p>
      <p className="history-values">{displayText}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={onClickingDelete}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-button-img"
        />
      </button>
    </div>
  )
}

export default TransactionItem
