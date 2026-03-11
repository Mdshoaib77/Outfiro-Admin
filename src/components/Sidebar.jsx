// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { FaSquarePlus } from "react-icons/fa6"
// import { MdFactCheck } from "react-icons/md"
// import { BiLogOut } from "react-icons/bi"
// import { FaListAlt } from "react-icons/fa"

// const Sidebar = ({setToken}) => {
//     return (
//         <div className='pb-3 bg-white rounded max-sm:flexCenter max-xs:pb-3 sm:w-1/5 sm:min-h-screen'>
//             <div className='flex flex-col pt-4 gap-y-6 max-sm:items-center sm:flex-col sm:pt-14'>
//                 {/* Logo */}
//                 <Link to={'/'} className='bold-22 xl:bold-32 sm:pl-2 lg:pl-12'>Outfir<span className='text-secondary'>o</span>
//                 </Link>
//                 <div className='flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10'>
//                     <NavLink to={'/'} className={({isActive})=> isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}>
//                         <FaSquarePlus />
//                         <div className='hidden lg:flex'>Add Item</div>
//                     </NavLink>
//                     <NavLink to={'/list'} className={({isActive})=> isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}>
//                         <FaListAlt />
//                         <div className='hidden lg:flex'>List</div>
//                     </NavLink>
//                     <NavLink to={'/orders'} className={({isActive})=> isActive ? "active-link" : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"}>
//                         <MdFactCheck />
//                         <div className='hidden lg:flex'>Orders</div>
//                     </NavLink>
//                     <div className='max-sm:ml-5 sm:mt-72'>
//                         <button onClick={()=> setToken("")} className='h-10 p-5 text-red-500 cursor-pointer flexStart gap-x-2 sm:pl-12 medium-15 rounded-xl'>
//                             <BiLogOut className='text-lg'/>
//                             <div className='hidden lg:flex'>Logout</div>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { FaSquarePlus } from "react-icons/fa6"
import { MdFactCheck } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
import { FaListAlt } from "react-icons/fa"

import { MdDashboard } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { HiChartBar } from "react-icons/hi"
import { FaEnvelope } from "react-icons/fa6"

const Sidebar = ({ setToken }) => {

    const navItem = "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"

    return (
        <div className='pb-3 bg-white rounded max-sm:flexCenter max-xs:pb-3 sm:w-1/5 sm:min-h-screen'>

            <div className='flex flex-col pt-4 gap-y-6 max-sm:items-center sm:flex-col sm:pt-14'>

                {/* Logo */}
                <Link to={'/'} className='bold-22 xl:bold-32 sm:pl-2 lg:pl-12'>
                    Outfir<span className='text-secondary'>o</span>
                </Link>

                <div className='flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10'>

                    {/* Overview */}
                    <NavLink
                        to={'/overview'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <MdDashboard />
                        <div className='hidden lg:flex'>Overview</div>
                    </NavLink>

                    {/* Add Product */}
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <FaSquarePlus />
                        <div className='hidden lg:flex'>Add Item</div>
                    </NavLink>

                    {/* Product List */}
                    <NavLink
                        to={'/list'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <FaListAlt />
                        <div className='hidden lg:flex'>Manage Items</div>
                    </NavLink>

                    {/* Orders */}
                    <NavLink
                        to={'/orders'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <MdFactCheck />
                        <div className='hidden lg:flex'>Orders</div>
                    </NavLink>

                    {/* Users */}
                    <NavLink
                        to={'/manage-users'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <FaUsers />
                        <div className='hidden lg:flex'>Manage Users</div>
                    </NavLink>

                {/* Contact */}
                   <NavLink
                        to={'/contact'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <FaEnvelope />
                        <div className='hidden lg:flex'>Contact</div>
                    </NavLink>

                    {/* Reports */}
                    <NavLink
                        to={'/reports'}
                        className={({ isActive }) => isActive ? "active-link" : navItem}
                    >
                        <HiChartBar />
                        <div className='hidden lg:flex'>Reports</div>
                    </NavLink>

                    {/* Logout */}
                    <div className='max-sm:ml-5 sm:mt-48'>
                        <button
                            onClick={() => setToken("")}
                            className='h-10 p-5 text-red-500 cursor-pointer flexStart gap-x-2 sm:pl-12 medium-15 rounded-xl'
                        >
                            <BiLogOut className='text-lg' />
                            <div className='hidden lg:flex'>Logout</div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar