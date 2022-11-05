import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const CheckOut = () => {
    const{user}=useContext(AuthContext);
    const service=useLoaderData();
    const {_id,title,price}=service;

    const handleCheckOut=event=>{
        event.preventDefault();
        const form=event.target;
        const name=`${form.firstName.value} ${form.lastName}`;
        const email=user?.email;
        const phone=form.phone.value;
        const message=form.message.value;
        form.reset();

        const order={
            service:_id,
            price,
            seviceName:title,
            customar:name,
            email,
            phone,
            message

        }


        fetch('https://y-five-pink.vercel.app/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err));

    }
    return (
        <div>
            <h1 className='text-2xl text-center font-bold my-3'>Your Services: {title} </h1>
            <h3 className='text-xl text-center'>Price: {price}</h3>
            <form onSubmit={handleCheckOut}>
                <div className='grid grid-cols-2 gap-6'>
                    <input className='border-2' type="text" placeholder='First Name' name='firstName' />
                    <input className='border-2' type="text" placeholder='Last Name' name='lastName' />
                    <input className='border-2' type="text" placeholder='Phone' name='phone' />
                    <input className='border-2' type="email" placeholder='Email' name='email' defaultValue={user?.email} />
                </div>
                <textarea className='border-2 w-full my-3' name="message" id="" cols="30" rows="10" placeholder='Write Your Message'></textarea>
                <button type='submit' className='btn btn-error'>Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;