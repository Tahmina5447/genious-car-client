import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import SingleOrder from './SingleOrder';

const Orders = () => {
    const {user,logOut}=useContext(AuthContext);
    const [orders,setOrders]=useState([]);
    // const [restOrder,setRestOrder]=useState();
    console.log(orders)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status ===403){
                logOut();
            }
            return res.json()
        })
        .then(data=>{
            setOrders(data)
        })
        .catch(err=>console.error(err))
    },[user?.email])

   

    const handleDelete=id=>{
        fetch(`http://localhost:5000/order/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                const remaining=orders.filter(ordr=>ordr._id !==id)
                setOrders(remaining);
                
            }
        })
        .catch(err=>console.error(err))

    }


    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
        })
    }
    

    return (
        <div>
            <h1>orders :{orders.length}</h1>
            {
                orders.map(order=><SingleOrder key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}></SingleOrder>)
            }
            
        </div>
    );
};

export default Orders;