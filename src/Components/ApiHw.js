import React, { useEffect,useState} from 'react'

export default function ApiHw() {
  const [vip_ar, setVipAr] = useState([])

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    const url = "http://fs1.co.il/bus/vip.php"
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data);
    setVipAr(data);
  }

  return (
    <div className='container'>
      <h1>List of VIP</h1>
      <div className='row'>
                {vip_ar.map(item => {
                  return (
                    <div key={item.name} className='col-md-6 border '>
                     <img src= {item.image} alt={item.name} style={{width:'100%'}}
                     className='float-start me-2 w-25'/>
                      <h2>{item.name}</h2>
                       <div>Money: {item.worth}</div>
                       <div>Company: {item.source}</div>
                    </div> 
                  )
                })}
              </div>
            </div>
          )
        }
