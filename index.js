const express = require("express")
const app = express()
const mongoose = require("mongoose")
const ProductSchema = require("./model/Product")
app.use(express.json())

mongoose
  .connect('')
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {console.log(err)})


const Product = mongoose.model("Products", ProductSchema)

app.get('/products', async (req, res)=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
})

app.get('/products/discount', async (req, res)=>{
    try{
        const products = await Product.find()
        products.sort((a, b) => {
            if (a.priceCross && !b.priceCross) return -1
            if (!a.priceCross && b.priceCross) return 1
            return 0
        })
        
        const discountedProducts = products.filter(product => product.priceCross);
        const nonDiscountedProducts = products.filter(product => !product.priceCross);
        const sortedProducts = [...discountedProducts, ...nonDiscountedProducts];
        
        res.status(200).json(sortedProducts)
    }catch(err){
        res.status(500).json(err)
    }

})

app.get("/find/:id", async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

app.post("/addproduct", async (req, res)=>{
    const newProduct = new Product(req.body)
    
    try{
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

app.put("/update/:id", async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id, {$set: req.body}, { new: true }
      )
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
})

app.delete("/delete/:id", async (req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})


app.listen(8800, ()=>{console.log("Server start !")})



