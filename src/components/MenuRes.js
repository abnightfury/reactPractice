import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
const MenuRes = () => {
    const [resMenu, setResMenu] = useState(null)
    const {resId} = useParams();
  
    
    useEffect(()=>{
        fetchMenu()
    },[])

  const fetchMenu=async()=>{
    const data = await fetch(MENU_API+resId);
    const json= await data.json()
    setResMenu(json.data);
    console.log(resMenu)
  } 
  if (resMenu===null) return <Shimmer/> ; 
  const { name, cuisines, costForTwoMessage } = resMenu?.cards[0]?.card?.card?.info;
  const{itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(itemCards)
  return (
    <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}: Rs {(item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</li>
                ))}
        </ul>
    </div>
  )
}

export default MenuRes

