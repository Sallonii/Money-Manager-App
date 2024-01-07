// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {img, text, altText, amount, cardColor} = moneyDetails

  return (
    <li className={`list-container ${cardColor}`}>
      <img src={img} alt={altText} className="logo" />
      <div>
        <h1 className="text">{text}</h1>
        <p className="amount">{amount}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
