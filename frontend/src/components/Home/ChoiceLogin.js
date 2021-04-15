import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

const ChoiceLogin =()=> {
    return (

<div className="min-h-screen   flex flex-col justify-center sm:py-12">
          <h1 className="font-bold text-black text-center text-2xl mb-5">Se connecter </h1> 
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md bg-white shadow w-full rounded-lg divide-y divide-gray-200 justify-center">
 
        <Link to ='/loginSeller' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  lg:mt-0">
             Seller
        </Link>
        <Link to='/loginCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  lg:mt-0" style={{marginLeft:190}}>
             Customer
        </Link>
        </div>
        <Link to='/compte' className="rounded px-3 py-2 m-1  shadow-lg font-bold  lg:mt-0" style={{marginLeft:876,width:165}} >
        Creer un compte
        </Link>
  
    


</div>

  
    )
}
export default ChoiceLogin