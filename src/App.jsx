// import React, { useEffect, useState } from 'react'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Sidebar from './components/Sidebar';
// import { Route, Routes } from "react-router-dom"
// import Add from './pages/Add';
// import List from './pages/List';
// import Orders from './pages/Orders';
// import Login from './components/Login';

// export const backend_url = import.meta.env.VITE_BACKEND_URL
// export const currency = "$"

// const App = () => {

//   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

//   useEffect(()=>{
//     localStorage.setItem('token', token)
//   }, [token])

//   return (
//     <main>
//       <ToastContainer />
//       {token === "" ? (
//         <Login setToken={setToken} />
//       ) : (
//         <div className='bg-primary text-[#404040]'>
//           <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row'>
//             <Sidebar setToken={setToken}/>
//             <Routes>
//               <Route path='/' element={<Add token={token}/>} />
//               <Route path='/list' element={<List token={token}/>} />
//               <Route path='/orders' element={<Orders token={token}/>} />
//             </Routes>
//           </div>
//         </div>
//       )}
//     </main>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import { Route, Routes } from "react-router-dom"

import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';

import Overview from './pages/Overview';
import ManageUsers from './pages/ManageUsers';
import Reports from './pages/Reports';

import Login from './components/Login';
import ContactMessages from './pages/ContactMessages';

export const backend_url = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])

  return (
    <main>

      <ToastContainer />

      {token === "" ? (

        <Login setToken={setToken} />

      ) : (

        <div className='bg-primary text-[#404040]'>

          <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row'>

            <Sidebar setToken={setToken}/>

            <Routes>

              {/* Existing Routes */}
              <Route path='/' element={<Add token={token}/>} />
              <Route path='/list' element={<List token={token}/>} />
              <Route path='/orders' element={<Orders token={token}/>} />

              {/* New Routes */}
              <Route path='/overview' element={<Overview />} />
              <Route path='/manage-users' element={<ManageUsers />} />contact
              <Route path='/reports' element={<Reports />} />
              <Route path='/contact' element={<ContactMessages />} />

            </Routes>

          </div>

        </div>

      )}

    </main>
  )
}

export default App