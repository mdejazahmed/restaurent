import { useState } from "react"
import "./menuSec.scss"
import MenuCard from '../../components/menuCard/MenuCard'

const menus=[
  {
    id:"ALL",
    tab:"All"
  },
  {
    id:"BURGER",
    tab:"Burger"
  },
  {
    id:"PIZZA",
    tab:"Pizza"
  },
  {
    id:"PASTA",
    tab:"Pasta"
  },
  {
    id:"FRIES",
    tab:"Fries"
  }
]

const menuItems=[
  {
    id:1,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686395344/restaurant/download_gtievj.png",
    price:"$17",
    name:"Delicious Pizza",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"PIZZA"
  },
  {
    id:2,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686395385/restaurant/download_umpv06.png",
    price:"$17",
    name:"Delicious Pizza",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"PIZZA"
  },
  {
    id:3,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686395572/restaurant/download_kogalu.png",
    price:"$17",
    name:"Delicious Pizza",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"PIZZA"
  },
  {
    id:4,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686395739/restaurant/download_ireig9.png",
    price:"$15",
    name:"Delicious Burger",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"BURGER"
  },
  {
    id:5,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686395747/restaurant/download_rmt1z2.png",
    price:"$15",
    name:"Delicious Burger",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"BURGER"
  },
  {
    id:6,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686395793/restaurant/download_wcoeik.png",
    price:"$15",
    name:"Delicious Burger",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"BURGER"
  },
  {
    id:7,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686396074/restaurant/download_rif4yz.png",
    price:"$18",
    name:"Delicious Pasta",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"PASTA"
  },
  {
    id:8,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686396099/restaurant/download_ncrppj.png",
    price:"$18",
    name:"Delicious Pasta",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"PASTA"
  },
  {
    id:9,
    img:"https://res.cloudinary.com/dxxh8iica/image/upload/v1686396474/restaurant/download_fmwzes.png",
    price:"$10",
    name:"Delicious Fries",
    desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    category:"FRIES"
  }
]

const MenuSec = () => {

  const [menuList,setMenuList]=useState(menuItems)
  const [activeTab,setActiveTab]=useState(menus[0].id)

  const handleTab=(id)=>{
    const filterList=id==="ALL"?menuItems:menuItems.filter((each)=>each.category===id)
    setMenuList(filterList)
    setActiveTab(id)
  }

  return (
    <div className="menuSec">
    <h3>Our Daily <span>Offers</span></h3>
    <ul>
      {menus.map((each)=>(
        <li key={each.id} className={activeTab===each.id?"activeTab":""} onClick={()=>handleTab(each.id)}>
            {each.tab}
        </li>
      ))}
    </ul>
      <div className="wrapper">
        {
          menuList.map((each)=>(
            <MenuCard key={each.id} card={each}/>
          ))
        }
      </div>
    </div>
  )
}

export default MenuSec