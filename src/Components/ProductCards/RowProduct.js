import React from 'react'
import './RowProduct.css'
import { ProductAdOffer } from '../../Database/Rowp'

function RowProduct(props) {
    return (
        <div className='Row'>
            <h3 className='Haed'>Today's Deals<span className="HeadLink"> See all deals</span></h3>
            <div className="carddis">
            

                {
                   ProductAdOffer.map((obj)=>{
                       return(
                           <div>
                               <img className='img' src={obj.li} alt="" />
                               <h6 className='valuePrice' >{obj.price}</h6>
                               
                           </div>
                       )
                   })
                }


            </div>
        </div>



        // <div className='MainContainer'>
        //     <h3 className='Haed'>Today's Deals<span className="HeadLink"> See all deals</span></h3>
        //     <div className="CildCantainer">

        //         <div className="cardImg">
        //             <img className='img' src={props.li} alt="" />
        //             <h6 className='valuePrice' >{props.Price}</h6>
        //         </div>
        //     </div>
        // </div>
    )
}

export default RowProduct
