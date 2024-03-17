import './index.css'

const MoneyDetails = props => {
  const {moneyTypeDetails} = props
  const {moneyType, amount, classname, imageUrl, id} = moneyTypeDetails
  return (
    <div className={`money-container ${classname}`}>
      <img src={imageUrl} alt={id} className="money-image" />
      <div>
        <p>{moneyType}</p>
        <h4>{`Rs ${amount}`}</h4>
      </div>
    </div>
  )
}

export default MoneyDetails
