import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Payment(){
    const navigate=useNavigate();
    let style1={
      color:'red',
      fontFamily:'Algerian'      
    };
    return(
        <>
            <h1 style={style1}>Are You Sure You Want To Pay</h1>
            <button onClick={()=>{
                navigate("/")                    
            }}>Cancel Payment</button>
            <button onClick={()=>{
                return(
                    navigate("/End")
                );
            }}>Pay</button>
        </>
    )
}
export default Payment;