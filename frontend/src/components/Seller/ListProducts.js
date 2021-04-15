import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const  ListProducts=()=> {
    const history = useHistory();

    const nameSeller=localStorage.getItem('IdSeller');
    const [listProducts, setListProducts] = useState();
    const [listProductsLength, setlistProductsLength] = useState();

    // get all Product and show it in table
    
    const IdSeller=localStorage.getItem('IdSeller');

    
      useEffect(()=>{
    
        axios.get(`http://localhost:3030/Seller/getProductBySellername/${IdSeller}`)
          .then(function (response) {
              
            setListProducts(response.data)
            setlistProductsLength(response.data.length)
          }).catch(function (err) {
            console.log(err);
        });
        
        },[IdSeller])
        
  // delete Product 

  // delete Product 
  const deleteProduct = (id)=>{
    var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Product ?");
    if (msgConfirmation) {   
    axios.delete(`http://localhost:3030/Seller/deleteProduct/${id}`)
    .then(function (response) {
        window.location.reload();
      console.log('item was deleted Succesfully ... ');
    
    })
    
  
  }
}
  const getIdProduct = (id)=>{
    localStorage.setItem('idProduct',id);
    history.push('/editProduct');
  
  }
    
    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/loginSeller');
        }

  const checklength = ()=>{
          if(listProductsLength > 9){
            toastr.error('You have increase Your Limets Buy a pack !! If you want to seller more ,pls upgrade your acoount')
            history.push('/buyPack');
  
          }
          else{
            history.push('/addProduct');
          }
        }
    

    return (
        <div>

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
        <Link to='sellerDashboard'  className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>Dashboard</span>
        </Link>
      </li>
     
      <li>
        <Link to='/' className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
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



  <div className=" flex items-center justify-center font-sans ">

    <div className="w-full" >
    <Link onClick={checklength} class="bg-blue-300 hover:bg-green-100 text-black font-bold py-2 px-4 rounded-md">
        Add Product
    </Link>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto "style={{overflow:"auto"}}>
          <thead>
            <tr className="bg-gray-200 text-gray-600  text-sm leading-normal">
              <th className="py-3 px-6 text-left"> ProductImg</th>
              <th className="py-3 px-6 text-left">Titel</th>
              <th className="py-3 px-6 text-center">Description</th>
              <th className="py-3 px-6 text-left"> Price</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center">CurrentDate</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          { listProducts && listProducts.map(item =>(
          <tbody className="text-gray-600 text-sm font-light">
          

            <tr className="border-b border-gray-200 hover:bg-gray-100">

              <td className="py-3 px-6 text-left whitespace-nowrap">
                 
             <img src={item.productImg} style={{width:100,height:90}}/>
              </td>
              <td className="py-3 px-6 text-left">
                 {item.titel}
              </td>
              <td className="py-6 px-9 text-left "style={{width:230}}>
              <textarea class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" style={{width:200,height:90}}>{item.description}</textarea>
    
              </td>
              <td className="py-3 px-6 text-center">
              {item.price}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
              {item.category}
              </td>
              <td className="py-3 px-6 text-left">
              {item.quantity}
              </td>
              <td className="py-3 px-6 text-left">
              {item.currentDate}
              </td>
              <td className="py-3 px-6 text-center">
              {item.status}
              </td>
              <td className="py-3 px-6 text-center">

                <div className="flex item-center justify-center">               
                  <Link onClick={()=>getIdProduct(item._id)} className="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </Link>
                  <Link onClick={()=>deleteProduct(item._id)} className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </Link>
                </div>

              </td>

            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  </div>
</div>

</div>

      
    )
}
export default ListProducts;