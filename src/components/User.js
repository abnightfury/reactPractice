import { useState } from "react";
const User = ({name}) => {
    const[count, setCount] = useState(0)
    const[count2, setCount2] = useState(0)
  return <div className="user-card">
    <h2>Name: {name}</h2>
    <h3>count : {count} , count2 : {count2}</h3>
    <h3>Location: Banglore</h3>
    <h4>Address:Agartala</h4>
  </div>;
};
export default User;
