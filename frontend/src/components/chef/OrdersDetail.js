import { useEffect, useState } from "react";
import axios from 'axios';
import { OrdersShow } from './OrdersShow'
import "../styles.css"
import { useParams } from "react-router-dom";

//import React from "react"
export const OrdersDetail = () => {
    // store all orders..
    const [foodOrders, setFoodOrders] = useState();
    const [totalOrders, setTotalOrders] = useState(0);
    const chefId = useParams().chefId;

    // fetch all orders ..
    const fetchFoodOrdersDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/order/chef/${chefId}`)
            .catch(error => console.log(error));
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        // after some interval rerander this page..
        setInterval(() => {
            fetchFoodOrdersDetails()
            .then(data => setFoodOrders(data))
        }, 3000);

    }, []);

    return (
        <>
            <div>
                <h1>All Orders</h1>
                {foodOrders && <h2>Total Orders: {foodOrders.length}</h2>}
                <br />
                <div className="ordersDetail">  

                    {foodOrders && foodOrders.map((foodOrder, index) => (
                        <OrdersShow
                            orderId={foodOrder._id}
                            foodName={foodOrder.name}
                            quantity={foodOrder.quantity}
                            table={foodOrder.table}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}