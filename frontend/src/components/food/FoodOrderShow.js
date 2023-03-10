import axios from "axios"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export const FoodOrderShow = (props) => {
    
    const[foodOrder,setFoodOrder] = useState();
    const foodName = useParams().foodName;
    const quantity = useParams().quantity;
    const {myInfo} = useSelector(state=>state.auth);

    const postTableOrder = async () => {
        // const tableBookId = '63d23cfaba82755485e47a3b';
        // console.log(myInfo.bookedTable);
        const res = await axios.post(`http://localhost:8000/api/order/${myInfo.bookedTable}`,{
            name:foodName,quantity
        })  
        .catch(error => console.log(error));
        const data = await res.data;
        return data;
      }

      useEffect(()=>{
        // console.log(myInfo);
        if(myInfo.bookedTable) postTableOrder().then(data=>setFoodOrder(data));
        // console.log('foodorder',foodOrder);
      },[myInfo])
    
    return (
        <>
            <h1>Food Ordered</h1>
            {foodOrder && <h2>{foodOrder.name}</h2>}
            {foodOrder && <h2>{foodOrder.quantity}</h2>}
            {foodOrder && <h2>{foodOrder.totalPrice}</h2>}
        </>
    )
}