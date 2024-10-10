import { Outlet, useNavigate } from 'react-router-dom';
import './Layoutcss.css';
import { useState } from 'react';


function Layout(){
    const [item,setItem]=useState([]);
    let style1={
        fontFamily:'Algerian',
        textAlign:'center'
    }
    let style2={
        position:'absolute',
        boxSizing:'border-box',
        backgroundImage:'url(https://wallpaperaccess.com/full/1624845.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'1240px 639px',
        height:'639px',
        width:'1240px',
        opacity:'0.7'       
    }
    let style3={
        position:'relative',
    }
    let style4={
        color:'lightgoldenrodyellow',
        fontSize:'40px',
        position:'absolute',
        top:'200px',
        left:'200px',
        background:"linear-gradient(330deg,purple,cyan,green)",
        height:'100px',
        borderRadius:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center' 
        
    }
    let style5={
        padding:'2px',
        fontSize:'20px',
        position:'absolute',
        textAlign:'center',
        left:'900px',
        top:'480px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'150px 150px',
        height:'150px',
        width:'150px',
        backgroundImage:'url(https://i.pinimg.com/originals/f7/59/32/f759321b8ece9266b586d57fcb521280.png)',
        
    }
    let style6={
        color:'blue',
        fontSize:'20px',
        position:'absolute',
        top:'350px',
        left:'500px',
        background:"lightgreen",
        height:'50px',
        borderRadius:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
    const navigate=useNavigate();
    return(
        <>
            <div style={style2}></div>
            <div style={style3}>
                <h1 style={style1}>Welcome to your <br/>online market</h1>
                <h1 style={style4}>We have one of the best products selling in our shop</h1>
                <div style={style5}>Get upto 10% off<br/>on<br/>Every Item</div>
                <div className='All'>Buy 2<br/>Get 1 Free</div>
                <button style={style6} onClick={()=>{
                    navigate("/Product")
                }}>Click to buy Products</button>
            </div>
            <Outlet/>
        </>
    );
}

export default Layout;