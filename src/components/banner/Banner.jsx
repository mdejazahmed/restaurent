import "./banner.scss"

const Banner = ({name}) => {
  const first=name.split(" ")[0]
  const last=name.split(" ")[1]
  return (
    <section className="banner">
      <div className="wrapper">
        <h2>{first} <span>{last}</span></h2>
      </div>
    </section>
  )
}

export default Banner