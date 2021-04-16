import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';


const DashbordSeller = () => {
 
  const history = useHistory();
  const [product, setProduct] = useState();
  const nameSeller=localStorage.getItem('IdSeller');
// get all sellers 

useEffect(()=>{

  axios.get(`https://tarekmarket-api.herokuapp.com/Seller/getAllProduct`)
    .then(function (response) {
        
      setProduct(response.data.length)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])


const logOut =()=>{

    localStorage.removeItem('token')
       history.push('/loginSeller');
    }


    const [listProductsLength, setlistProductsLength] = useState();
        
    const IdSeller=localStorage.getItem('IdSeller');
    axios.get(`https://tarekmarket-api.herokuapp.com/Seller/getProductBySellername/${IdSeller}`)
    .then(function (response) {
        
      setlistProductsLength(response.data.length)
    }).catch(function (err) {
      console.log(err);
  });

    return (

   <div>


{/* component */}

<div className="flex flex-wrap bg-gray-100 w-full h-screen">
  <div className="w-2/12 bg-white rounded p-3 shadow-lg">
    <div className="flex items-center space-x-4 p-2 mb-5">
      {/* <img className="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" /> */}
      <div>
        <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{nameSeller}</h4>
        <span className="text-sm tracking-wide flex items-center space-x-1">
          <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg><span className="text-gray-600">Verified</span>
        </span>
      </div>
    </div>
    <ul className="space-y-2 text-sm">
      <li>
        <Link  className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>Dashboard</span>
        </Link>
      </li>
     
      <li>
        <Link to='/listProduct' className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            {/* <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg> */}
          </span>
          <span>Espace Produit</span>
        </Link>
      </li>
      <li>
        <Link to='/buyPack' className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            {/* <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg> */}
          </span>
          <span>Acheter un Compte</span>
        </Link>
      </li>
     
      <li>
        <Link onClick={logOut} className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </span>
          <span>Se deconnecter</span>
        </Link>
      </li>
    </ul>
  </div>
  <div className="w-9/12">
    <div className="p-4 text-gray-500">
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">

    </div>
    <div className="flex flex-wrap -m-4 text-center">
     
      <div className="p-4 md:w-4/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor"  strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">         
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">{listProductsLength}</h2>
          <p className="leading-relaxed">Products</p>
        </div>
      </div>
   
      <div className="p-4 md:w-4/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
           <svg fill="none" stroke="currentColor"  strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">3K DH</h2>
          <p className="leading-relaxed">Total Gains</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  </div>
</div>






</div>
      
    )
}
export default DashbordSeller;