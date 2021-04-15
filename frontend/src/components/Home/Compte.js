import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

const Compte =()=> {
    return (
<div className="min-h-screen flex flex-col justify-center sm:py-12">
          <h1 className="font-bold text-red text-center text-2xl mb-5">Inscription </h1> 
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md bg-white shadow w-full rounded-lg divide-y divide-gray-200 justify-center">
 
        <Link to ='/signIn' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0">
             Vendeur
        </Link>
        <Link to='/signInCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0" style={{marginLeft:190}}>
             Client
        </Link>
        </div>
        <Link to='/choiceLogin' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0" style={{marginLeft:850,width:220}} >
                 j'ai deja un compte
        </Link>
  
    


</div>
  
      
    )
}
export default Compte