import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import Navbar from '../parts/NavBar'
import Footer from '../parts/Footer';

const Home=()=> {

  const history = useHistory();
  const [products, setProducts] = useState();

// get all admin and show it in table

useEffect(()=>{

  axios.get(`http://localhost:3030/Seller/getAllProduct`)
    .then(function (response) {
        
      setProducts(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })
  const getIdProduct= (id)=>{
    localStorage.setItem('idProduct',id);
    history.push('/detailsProduct');
  
  }
    

    return (
<div>

<section className="text-gray-600 body-font">
  <Navbar/>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    { products && products.map(item =>(
      <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a className="block relative h-68 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-grown" src={item.productImg} style={{width:260,height:290}}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.titel}</h3>

          <p className="mt-1">{item.price}DH</p>
        </div>
        <Link onClick={()=>getIdProduct(item._id)} className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold lg:mt-0">Buy</Link>
      </div>
    ))}
    </div>
  </div>
</section>

 <Footer/>
</div>

  )
}
export default Home 