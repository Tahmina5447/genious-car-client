import React, { useEffect, useState } from 'react';

const SingleOrder = ({order,handleDelete,handleStatusUpdate}) => {
    const {_id,service,seviceName,price,status}=order;
    const [orderImg,setOrderImg]=useState();


    useEffect(()=>{
        fetch(`https://y-five-pink.vercel.app/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderImg(data))
        .catch(err=>console.error(err))
    },[service])


   
    return (
        <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  
                  <tbody>
                    <tr>
                      <th>
                        <label>
                            <button onClick={()=>{handleDelete(_id)}} className='btn btn-ghost'>X</button>
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    orderImg?.img && <img src={orderImg.img} alt="Avatar Tailwind CSS Component" />
                                }
                              
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{seviceName}</div>
                            
                          </div>
                        </div>
                      </td>
                      <td>
                      Price: ${price}
                        
                      </td>
                      <td>Purple</td>
                      <th>
                        <button onClick={()=>{handleStatusUpdate(_id)}} className="btn btn-ghost btn-xs">{status? status : 'Pending'}</button>
                      </th>
                    </tr>
                    
                  </tbody>
                  
                  
                </table>
              </div>
    );
};

export default SingleOrder;