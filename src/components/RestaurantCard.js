import { CDN_URL } from "../utils/constants"

const styleCard = {
    backgroundColor:"#f0f0f0"
}
const RestaurantCard =(props)=>{
    const {resData}= props
    const { cloudinaryImageId,name, avgRating, cuisines, costForTwo, deliveryTime}= resData // optional chaining 
    return(
        <div className="res-card" style={styleCard}>
            <div className="res-card-pic">
                <img src={CDN_URL+ cloudinaryImageId}/>
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRating} Stars</h5>
            <h6>{deliveryTime} Mins</h6>
        </div>
    )
}
export default RestaurantCard;