const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Market=require('./MarketSchema.js');
const app=express();
const cors = require('cors');

mongoose.connect('mongodb+srv://Karan:Lukka@cluster0.ebamf.mongodb.net/')
.then(()=>{
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(cors());
    app.get('/Products',async(req,res)=>{
		const market=await Market.find();
        res.json(market);
	})
	// app.post('/Products',async(req,res)=>{
	// 	const market=new Market({...req.body});
	// 	await market.save();
	// 	res.json(market);
	// })
	// app.patch('/Products/:id',async(req,res)=>{
	// 	const market=await Student.findOne({Sid:req.params.id});
	// 	market.Pid=req.body.Pid;
	// 	market.Pname=req.body.Pname;
	// 	market.Pimage=req.body.Pimage;
	// 	await market.save();
	// 	res.json(market);
	// })
	})
app.listen(3001,()=>{
	console.log("Server started at 3001");
})