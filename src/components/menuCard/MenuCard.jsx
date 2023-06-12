import "./menuCard.scss"

const menuCard = ({card}) => {
  return (
    <div className="menuCard">
      <div className="wrapper">
        <div className="imgContainer">
          <img src={card.img} alt="" />
          <span>{card.price}</span>
        </div>
        <h4>{card.name}</h4>
        <p>{card.desc}</p>
        <button>ORDER NOW</button>
      </div>
    </div>
  )
}

export default menuCard