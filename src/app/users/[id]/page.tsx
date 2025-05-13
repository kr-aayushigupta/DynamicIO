// import React from 'react'
// import Link from 'next/link';
// import {SearchParams } from 'next/dist/server/request/search-params';
// import { Params } from 'next/dist/server/request/params';
// import { Suspense } from 'react';

// async function Userpage(
//     {params,searchparams}:{
//         params:Params,
//         searchparams:SearchParams
//     }
// ) {


//     const { id } = await params;
    
//   return (
//     <div>

//         <h2>User - {id}</h2>
//         <Suspense fallback={<p className='text-center'>Loading....</p>}>
//             <SuspendedComponent searchparams={searchparams}/>
//         </Suspense>
  
//         <form action="">
//             <input type="text" name="q"/>
//             <button type='submit'>Submit</button>

//         </form>
//         <Link href="/">Home</Link>
//     </div>
//   )
// }


// async function SuspendedComponent(searchparams:{searchparams:SearchParams}){
//     const {q} = await searchparams;
//     return <h2 className='text-center'>Query - {q}</h2>

// }
// export default Userpage;

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page