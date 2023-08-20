import { CDN_URL } from "../utils/constants"

const styleCard = {
    backgroundColor:"#f0f0f0"
}
const RestaurantCard =(props)=>{
    const {resData}= props
    //console.log(resData, "resdata")
    const { cloudinaryImageId,name, avgRating, cuisines, costForTwo}= resData
    const{deliveryTime}=resData?.sla // optional chaining 
    return(
        <div data-testid="rescard" className=" m-[10px] p-[5px]  w-[224px] text-center break-words bg-gray-100 hover:bg-gray-200  shadow-lg border border-solid border-gray-200 rounded-md" >
            <div className="res-card-pic w-[100%]  h-52 overflow-hidden rounded-md">
                <img className="  w-[100%]" src={CDN_URL+ cloudinaryImageId}/>
            </div>
            <h3 className=" text-blue-600 hover:text-red-700  text-{14px} font-bold">{name}</h3>
            <h4 className="text-sm">{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRating} Stars</h5>
            <h6>{deliveryTime} Mins</h6>
        </div>
    )
}

// enhanced restaurant card (HOC)
export const withBadges =(RestaurantCard)=>{
    return (props)=>{
        console.log(props, "enhanced")
        const{description} = props.resData.badges.imageBadges[0]
        return(
            <div>
                <label className="absolute m-1 p-1 bg-black text-white">{description}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;