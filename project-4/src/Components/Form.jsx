import React, { useEffect, useState } from 'react'


export default function Productform() {
    const [sellerName, setSellerName] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [sellerNum, setsellerNum] = useState("");

    const [sellerNameErr, setSellerNameErr] = useState("");
    const [companyNameErr, setcompanyNameErr] = useState("");
    const [sellerNumErr, setsellerNumErr] = useState("");



    const [productPrice, setProductPrice] = useState("");
    const [productName, setProductName] = useState("");

    const [productNameErr, setProductNameErr] = useState("");
    const [productPriceErr, setProductPriceErr] = useState("");

    const [productCategory, setProductCategory] = useState("");




    const handleSubmit=(event)=>{
        event.preventDefault();

        if(sellerName.length<3){
            setSellerNameErr("Seller name must be at least 3 characters");

        }
        else{

            setSellerNameErr("");
            console.log("Seller Name:",sellerName)

        }
        if(companyName.length<3){
            setcompanyNameErr("Company name must be at least 3 characters");
        }else{
            setcompanyNameErr("");
            console.log("Company Name:",companyName)
        }
        if(sellerNum.length<10){
            setsellerNumErr("Seller number must be at least 10 Number");
        }else{
            setsellerNumErr("");
            console.log("Seller Number:",sellerNum)
        }



    }
    const handleSubmit2=(e)=>{
        e.preventDefault();
        if(productName.length<3){
            setProductNameErr("Product name must be at least 3 characters");
        }else{
            setProductNameErr("");
            console.log("Product Name:",productName)
            

        }
        if(productPrice.length<1){
            setProductPriceErr("Product price must be at least 1 Number");
        }else{
            setProductPriceErr("");
            console.log("Product Price:",productPrice)
        }

    }


    return (
<div>
<form id='s90' className='main' onSubmit={handleSubmit}>
    <div className="form-group">
        <h1>Seller`s Details</h1><br />
        <input type="text" placeholder='Seller Name:' className="form-control" id="sellerName" value={sellerName} onChange={(e)=>setSellerName(e.target.value)} />
        <p style={{color:"red"}}>{sellerNameErr}</p>
        <input type="text" placeholder='Company Name:' className="form-control" id="sellerName" value={companyName} onChange={(e)=>setcompanyName(e.target.value)} />
        <p style={{color:"red"}}>{companyNameErr}</p>
        <input type="number" placeholder='Seller Number:' className="form-control" id="seller"  value={sellerNum} onChange={(e)=>setsellerNum(e.target.value)} />
        <p style={{color:"red"}}>{sellerNumErr}</p>
        <button type='submit' onClick={handleSubmit}>Submit</button>

        </div>

</form> <br /><br />
<center> <div className="a1">
          <h4>Seller name is :{sellerName}</h4><hr />
          <h4>company name is :{companyName}</h4><hr />
          <h4>Seller number is :{sellerNum}</h4>
        </div></center>


<form id='s51' className='s85' action="" onSubmit={(e)=>handleSubmit2(e)}>
    
    <div  className="form1-group">
        <br />
        <h1>Product Details</h1><br />
        <input type="text" placeholder='Product Name:' className="form-control" id="product" value={productName} onChange={(e)=>setProductName(e.target.value)} />
        <p style={{color:"red"}}>{productNameErr}</p>
        <input type="text" placeholder='Product Price:' className="form-control" id="product" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} />
        <p style={{color:"red"}}>{productPriceErr}</p>

        <select name="" id="" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
        <option value="">Category</option>
              <option value="electronics">Electronics</option>
              <option value="mobile">Mobile</option>
              <option value="clothing">Clothing</option>
              <option value="grocery">Grocery</option>
              <option value="books">Books</option>
        </select>
        {
             productCategory== "electronics" && <input type="text" className='mt-3' placeholder='Enter Warranty Details' />
        }
             {
              productCategory == "electronics" && <input type="text" className='mt-3' placeholder='Enter Guarantee Details' />
            }
            {
              productCategory == "electronics" && <input type="text" className='mt-3' placeholder='Enter Model Name' />
            }

            
            {
              productCategory == "mobile" && <input type="text" className='mt-3' placeholder='Oppo' />
            }
            {
              productCategory == "mobile" && <input type="text" className='mt-3' placeholder='redmi' />
            }
            {
              productCategory == "mobile" && <input type="text" className='mt-3' placeholder='Vivo' />
            }

            
            {
              productCategory == "clothing" && <input type="text" className='mt-3' placeholder='Enter Brand Name' />
            }
            {
              productCategory == "clothing" && <input type="text" className='mt-3' placeholder='Enter Discount Amount' />
            }
            {
              productCategory == "clothing" && <input type="text" className='mt-3' placeholder='Enter Size (S , M , L , XL , XXL , 3XL)' />
            }

            
            {
              productCategory == "grocery" && <input type="text" className='mt-3' placeholder='Enter Expiry Date' />
            }
            {
              productCategory == "grocery" && <input type="text" className='mt-3' placeholder='Enter Ingredient Details' />
            }
            {
              productCategory == "grocery" && <input type="text" className='mt-3' placeholder='Enter Quantity' />
            }

            
            {
              productCategory == "books" && <input type="text" className='mt-3' placeholder='Enter Author Name' />
            }
            {
              productCategory == "books" && <input type="text" className='mt-3' placeholder='Enter Subject Name' />
            }
            {
              productCategory == "books" && <input type="text" className='mt-3' placeholder='Enter Publisher Details' />
            }
            <br /><br />
            <button onClick={handleSubmit2}>Submit</button>
            <br /><br />





    </div>
    <br /><br />
</form> <br /><br />
<center> <div className="a2">
          <h4>Product Price is :{productPrice}</h4><hr />
          <h4>product Catagory is :{productCategory}</h4>
        </div></center>

<br /><br /><br /><br /><br />

</div>
)
}