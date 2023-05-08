// import React, {useEffect} from 'react'


// const Covid = () => {
  
//     const getCovidData = async () => {

//         try{
//              const res = await fetch('https://api.covid19india.org/data.json', {mode:'no-cors'} );
//             // const res = await axios.get("https://api.covid19india.org/data.json")
//              console.log(res);
//             //  const actualData = await res.json();
//             //   console.log(actualData);
//         }
//         catch(err){
//             console.log(err);
//         }
      
//     }

//     useEffect(() => {
//        getCovidData();       
//     }, []);

//   return (
//       <div>
//       <h1>🔴 LIVE</h1>
//       <h2>COVID-19 CORONAVIRUS TRACKER</h2>
//       </div>
//   )
// }


// export default Covid;


import React, { useEffect,useState } from 'react'
import './covid.css'

const Covid = () => {

    const[data,setData] = useState([]);

    const getCovidData = async () => {

        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div className='section'>
            <h1>🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>

            <ul>
                <li className='card'> 
                  <div className='card__main'>
                    <div className='card__inner'>
                    <p className='card__name'>
                       <span>OUR </span> Country
                    </p>   
                    <p className='card__total card__small'>INDIA</p>
                    </div>
                    </div> 
                </li>

                <li className='card'> 
                <div className='card__main'>
                  <div className='card__inner'>
                  <p className='card__name'>
                     <span>TOTAL</span> RECOVERED
                  </p>   
                  <p className='card__total card__small'>INDIA</p>
                  </div>
                  </div>
              </li>

              <li className='card'> 
              <div className='card__main'>
                <div className='card__inner'>
                <p className='card__name'>
                   <span>TOTAL</span> CONFIRMED
                </p>   
                <p className='card__total card__small'>INDIA</p>
                </div>
                </div>
            </li>

            
            </ul>
        </div>
    )
}


export default Covid;