import React, { useEffect, useState } from 'react'
import statisticalApi from '../api/statisticalApi'
import { formatCurrency } from '../utilities/util';

function Statistical() {

    const [data, setData] = useState();

    useEffect(()=>{
        new Promise(async() =>{
            await fetch();
        })
    },[])

    const fetch = async() =>{
        try {
            const res = await statisticalApi.getStatisticalAll();

            if(res.data){
                console.log(res.data);
               setData(res.data)
            }
        } catch (error) {
            
        }
    }

  return (
    <div style={{ height: "100vh", width: "100%", paddingBottom:'100px' }}>
    <div className="container-fluid pb-3">
      <div className="">
        <h1>Thống kê</h1>        
        <div className="d-flex justify-content-center gap-2">
        <div className="card mr-2" style={{width: '18rem', textAlign: 'center'}}>
        <div className="card-body">
            <h5>Tong ve</h5>
            <h3 className='font-weight-bold'>{data?.totalTickets} ve</h3>
            </div></div>
            <div className="card mr-2" style={{width: '18rem', textAlign: 'center'}}>
        <div className="card-body">
            <h5>Tong tien</h5>
            <h3 className='font-weight-bold'>{data?.totalRevenue ? formatCurrency(data.totalRevenue) : '0 VND'}</h3>
            </div></div>
        </div>
      </div>
    </div>p
   
  </div>
  )
}

export default Statistical