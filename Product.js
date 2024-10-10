import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Product(){
    const [data,setData]=useState([]);
    const apiURL="http://localhost:3001/Products"

    useEffect(()=>{
        fetch(apiURL,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res))
    },[]);
    const navigate=useNavigate();
    const formatedData=data.map((prod)=>{  
        function AmountComponent(){
            const [amount, setAmount] = useState(0);
            return (
              <div>
                <h1>Current Amount: {amount}</h1>
                <button  onClick={setAmount(prevAmount => prevAmount + prod.Pprice)}>Add Amount</button>

              </div>
            );
        }; 
        return(
            <>
                <tr>
                    <td>{prod.Pid}</td>
                    <td>{prod.Pname}</td>
                    <td><img src={prod.Pimage} width={100}/></td>
                    <td>{prod.Pprice}</td>
                    <td><button className="btn btn-primary" onClick={()=>{
                           <AmountComponent/> 
                        }}>Add to Cart</button>
                    </td>
                </tr>
            </>
        );
    })
    return(
    <>
        <div>
            <button onClick={()=>{
                navigate("/Payment")
            }}>Buy</button>
            <button onClick={()=>{
                navigate("/")
            }}>Back</button>
        </div>
        <table>{formatedData}</table>
    </>
    )
}
export default Product;