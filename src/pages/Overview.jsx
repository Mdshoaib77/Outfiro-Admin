// // // import React from "react";

// // // const Overview = () => {
// // //   return (
// // //     <div className="w-full px-4 mt-6 sm:px-8">

// // //       {/* Title */}
// // //       <h2 className="mb-6 text-2xl font-semibold">Overview</h2>

// // //       {/* Cards */}
// // //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

// // //         {/* Total Products */}
// // //         <div className="p-5 bg-white border shadow-sm rounded-xl">
// // //           <p className="text-sm text-gray-500">Total Products</p>
// // //           <h3 className="mt-2 text-2xl font-bold">120</h3>
// // //         </div>

// // //         {/* Total Orders */}
// // //         <div className="p-5 bg-white border shadow-sm rounded-xl">
// // //           <p className="text-sm text-gray-500">Total Orders</p>
// // //           <h3 className="mt-2 text-2xl font-bold">56</h3>
// // //         </div>

// // //         {/* Total Users */}
// // //         <div className="p-5 bg-white border shadow-sm rounded-xl">
// // //           <p className="text-sm text-gray-500">Total Users</p>
// // //           <h3 className="mt-2 text-2xl font-bold">32</h3>
// // //         </div>

// // //       </div>

// // //       {/* Recent Activity */}
// // //       <div className="p-6 mt-8 bg-white border shadow-sm rounded-xl">

// // //         <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>

// // //         <ul className="space-y-3 text-sm text-gray-600">

// // //           <li className="pb-2 border-b">
// // //             New order placed by John Doe
// // //           </li>

// // //           <li className="pb-2 border-b">
// // //             New product added: Winter Jacket
// // //           </li>

// // //           <li>
// // //             User Sarah registered an account
// // //           </li>

// // //         </ul>

// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default Overview;


// // // import React, { useEffect, useState } from "react"
// // // import axios from "axios"
// // // import { backend_url } from "../App"

// // // const Overview = ({ token }) => {

// // //   const [stats, setStats] = useState({
// // //     totalProducts: 0,
// // //     totalUsers: 0,
// // //     totalOrders: 0,
// // //     revenue: 0
// // //   })

// // //   const fetchDashboardStats = async () => {
// // //     try {

// // //       const response = await axios.get(
// // //         backend_url + "/api/admin/dashboard",
// // //         { headers: { token } }
// // //       )

// // //       if (response.data.success) {
// // //         setStats(response.data.stats)
// // //       }

// // //     } catch (error) {
// // //       console.log(error)
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     fetchDashboardStats()
// // //   }, [])

// // //   return (
// // //     <div className="w-full p-8">

// // //       <h1 className="mb-6 text-2xl font-bold">
// // //         Admin Overview
// // //       </h1>

// // //       <div className="grid grid-cols-4 gap-6">

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Total Products</h2>
// // //           <p className="text-2xl font-bold">{stats.totalProducts}</p>
// // //         </div>

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Total Users</h2>
// // //           <p className="text-2xl font-bold">{stats.totalUsers}</p>
// // //         </div>

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Total Orders</h2>
// // //           <p className="text-2xl font-bold">{stats.totalOrders}</p>
// // //         </div>

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Revenue</h2>
// // //           <p className="text-2xl font-bold">
// // //             ${stats.revenue}
// // //           </p>
// // //         </div>

// // //       </div>

// // //     </div>
// // //   )
// // // }

// // // export default Overview


// // // import React, { useEffect, useState } from "react"
// // // import axios from "axios"
// // // import { backend_url } from "../App"

// // // const Overview = () => {

// // //   const [stats, setStats] = useState({
// // //     totalProducts: 0,
// // //     totalUsers: 0,
// // //     totalOrders: 0,
// // //     revenue: 0
// // //   })

// // //   const fetchDashboardStats = async () => {
// // //     try {

// // //       const response = await axios.get(
// // //         backend_url + "/api/admin/dashboard",
// // //         { headers: { token: localStorage.getItem("token") } }
// // //       )

// // //       if (response.data.success) {
// // //         setStats(response.data.stats)
// // //       }

// // //     } catch (error) {
// // //       console.log(error)
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     fetchDashboardStats()
// // //   }, [])

// // //   return (
// // //     <div className="w-full p-8">

// // //       <h1 className="mb-6 text-2xl font-bold">
// // //         Admin Overview
// // //       </h1>

// // //       <div className="grid grid-cols-4 gap-6">

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Total Products</h2>
// // //           <p className="text-2xl font-bold">{stats.totalProducts}</p>
// // //         </div>

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Total Users</h2>
// // //           <p className="text-2xl font-bold">{stats.totalUsers}</p>
// // //         </div>

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Total Orders</h2>
// // //           <p className="text-2xl font-bold">{stats.totalOrders}</p>
// // //         </div>

// // //         <div className="p-6 bg-white shadow rounded-xl">
// // //           <h2 className="text-gray-500">Revenue</h2>
// // //           <p className="text-2xl font-bold">
// // //             ${stats.revenue}
// // //           </p>
// // //         </div>

// // //       </div>

// // //     </div>
// // //   )
// // // }

// // // export default Overview

// // import React, { useEffect, useState } from "react"
// // import axios from "axios"
// // import { backend_url } from "../App"

// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer
// // } from "recharts"

// // const Overview = () => {

// //   const [stats, setStats] = useState({
// //     totalProducts: 0,
// //     totalUsers: 0,
// //     totalOrders: 0,
// //     revenue: 0
// //   })

// //   const [orders, setOrders] = useState([])
// //   const [users, setUsers] = useState([])

// //   const fetchDashboardStats = async () => {
// //     try {

// //       const response = await axios.get(
// //         backend_url + "/api/admin/dashboard",
// //         { headers: { token: localStorage.getItem("token") } }
// //       )

// //       if (response.data.success) {
// //         setStats(response.data.stats)

// //         /* recent orders */
// //         if (response.data.latestOrders) {
// //           setOrders(response.data.latestOrders)
// //         }

// //         /* recent users */
// //         if (response.data.latestUsers) {
// //           setUsers(response.data.latestUsers)
// //         }
// //       }

// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchDashboardStats()
// //   }, [])


// //   /* chart data */
// //   const chartData = [
// //     { name: "Products", value: stats.totalProducts },
// //     { name: "Users", value: stats.totalUsers },
// //     { name: "Orders", value: stats.totalOrders },
// //   ]


// //   return (
// //     <div className="w-full p-8">

// //       <h1 className="mb-6 text-2xl font-bold">
// //         Admin Overview
// //       </h1>

// //       {/* Stats Cards */}

// //       <div className="grid grid-cols-4 gap-6">

// //         <div className="p-6 bg-white shadow rounded-xl">
// //           <h2 className="text-gray-500">Total Products</h2>
// //           <p className="text-2xl font-bold">{stats.totalProducts}</p>
// //         </div>

// //         <div className="p-6 bg-white shadow rounded-xl">
// //           <h2 className="text-gray-500">Total Users</h2>
// //           <p className="text-2xl font-bold">{stats.totalUsers}</p>
// //         </div>

// //         <div className="p-6 bg-white shadow rounded-xl">
// //           <h2 className="text-gray-500">Total Orders</h2>
// //           <p className="text-2xl font-bold">{stats.totalOrders}</p>
// //         </div>

// //         <div className="p-6 bg-white shadow rounded-xl">
// //           <h2 className="text-gray-500">Revenue</h2>
// //           <p className="text-2xl font-bold">
// //             ${stats.revenue}
// //           </p>
// //         </div>

// //       </div>


// //       {/* Orders Chart */}

// //       <div className="p-6 mt-10 bg-white shadow rounded-xl">

// //         <h2 className="mb-4 text-xl font-semibold">
// //           Dashboard Chart
// //         </h2>

// //         <ResponsiveContainer width="100%" height={300}>
// //           <BarChart data={chartData}>
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip />
// //             <Bar dataKey="value" fill="#3B82F6" />
// //           </BarChart>
// //         </ResponsiveContainer>

// //       </div>


// //       {/* Latest Orders */}

// //       <div className="p-6 mt-10 bg-white shadow rounded-xl">

// //         <h2 className="mb-4 text-xl font-semibold">
// //           Latest Orders
// //         </h2>

// //         <table className="w-full">

// //           <thead>
// //             <tr className="text-left border-b">
// //               <th className="py-2">Order ID</th>
// //               <th className="py-2">Amount</th>
// //               <th className="py-2">Status</th>
// //             </tr>
// //           </thead>

// //           <tbody>

// //             {orders.map((order, index) => (

// //               <tr key={index} className="border-b">

// //                 <td className="py-2">
// //                   {order._id.slice(-6)}
// //                 </td>

// //                 <td className="py-2">
// //                   ${order.amount}
// //                 </td>

// //                 <td className="py-2">
// //                   {order.status}
// //                 </td>

// //               </tr>

// //             ))}

// //           </tbody>

// //         </table>

// //       </div>


// //       {/* Latest Users */}

// //       <div className="p-6 mt-10 bg-white shadow rounded-xl">

// //         <h2 className="mb-4 text-xl font-semibold">
// //           Recent Users
// //         </h2>

// //         <table className="w-full">

// //           <thead>
// //             <tr className="text-left border-b">
// //               <th className="py-2">Name</th>
// //               <th className="py-2">Email</th>
// //             </tr>
// //           </thead>

// //           <tbody>

// //             {users.map((user, index) => (

// //               <tr key={index} className="border-b">

// //                 <td className="py-2">
// //                   {user.name}
// //                 </td>

// //                 <td className="py-2">
// //                   {user.email}
// //                 </td>

// //               </tr>

// //             ))}

// //           </tbody>

// //         </table>

// //       </div>

// //     </div>
// //   )
// // }

// // export default Overview


// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { backend_url } from "../App"

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts"

// const Overview = () => {

//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     totalUsers: 0,
//     totalOrders: 0,
//     revenue: 0
//   })

//   const [orders, setOrders] = useState([])
//   const [users, setUsers] = useState([])

//   const fetchDashboardStats = async () => {
//     try {

//       const response = await axios.get(
//         backend_url + "/api/admin/dashboard",
//         { headers: { token: localStorage.getItem("token") } }
//       )

//       if (response.data.success) {
//         setStats(response.data.stats)

//         /* recent orders */
//         if (response.data.latestOrders) {
//           setOrders(response.data.latestOrders)
//         }

//         /* recent users */
//         if (response.data.latestUsers) {
//           setUsers(response.data.latestUsers)
//         }
//       }

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchDashboardStats()
//   }, [])


//   /* chart data */
//   const chartData = [
//     { name: "Products", value: stats.totalProducts },
//     { name: "Users", value: stats.totalUsers },
//     { name: "Orders", value: stats.totalOrders },
//   ]


//   return (
//     <div className="w-full p-8">

//       <h1 className="mb-6 text-2xl font-bold">
//         Admin Overview
//       </h1>

//       {/* Stats Cards */}

//       <div className="grid grid-cols-4 gap-6">

//         <div className="p-6 bg-white shadow rounded-xl">
//           <h2 className="text-gray-500">Total Products</h2>
//           <p className="text-2xl font-bold">{stats.totalProducts}</p>
//         </div>

//         <div className="p-6 bg-white shadow rounded-xl">
//           <h2 className="text-gray-500">Total Users</h2>
//           <p className="text-2xl font-bold">{stats.totalUsers}</p>
//         </div>

//         <div className="p-6 bg-white shadow rounded-xl">
//           <h2 className="text-gray-500">Total Orders</h2>
//           <p className="text-2xl font-bold">{stats.totalOrders}</p>
//         </div>

//         <div className="p-6 bg-white shadow rounded-xl">
//           <h2 className="text-gray-500">Revenue</h2>
//           <p className="text-2xl font-bold">
//             ${stats.revenue}
//           </p>
//         </div>

//       </div>


//       {/* Orders Chart */}

//       <div className="p-6 mt-10 bg-white shadow rounded-xl">

//         <h2 className="mb-4 text-xl font-semibold">
//           Dashboard Chart
//         </h2>

//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#3B82F6" />
//           </BarChart>
//         </ResponsiveContainer>

//       </div>


//       {/* Latest Orders */}

//       <div className="p-6 mt-10 bg-white shadow rounded-xl">

//         <h2 className="mb-4 text-xl font-semibold">
//           Latest Orders
//         </h2>

//         <table className="w-full">

//           <thead>
//             <tr className="text-left border-b">
//               <th className="py-2">Order ID</th>
//               <th className="py-2">Amount</th>
//               <th className="py-2">Status</th>
//             </tr>
//           </thead>

//           <tbody>

//             {orders.map((order, index) => (

//               <tr key={index} className="border-b">

//                 <td className="py-2">
//                   {order._id.slice(-6)}
//                 </td>

//                 <td className="py-2">
//                   ${order.amount}
//                 </td>

//                 <td className="py-2">
//                   {order.status}
//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>


//       {/* Latest Users */}

//       <div className="p-6 mt-10 bg-white shadow rounded-xl">

//         <h2 className="mb-4 text-xl font-semibold">
//           Recent Users
//         </h2>

//         <table className="w-full">

//           <thead>
//             <tr className="text-left border-b">
//               <th className="py-2">Name</th>
//               <th className="py-2">Email</th>
//             </tr>
//           </thead>

//           <tbody>

//             {users.map((user, index) => (

//               <tr key={index} className="border-b">

//                 <td className="py-2">
//                   {user.name}
//                 </td>

//                 <td className="py-2">
//                   {user.email}
//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   )
// }

// export default Overview


import React, { useEffect, useState } from "react"
import axios from "axios"
import { backend_url } from "../App"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

const Overview = () => {

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0
  })

  const [orders, setOrders] = useState([])
  const [users, setUsers] = useState([])
  const [topProducts, setTopProducts] = useState([])

  const fetchDashboardStats = async () => {

    try {

      const response = await axios.get(
        backend_url + "/api/admin/dashboard",
        { headers: { token: localStorage.getItem("token") } }
      )

      if (response.data.success) {

        setStats(response.data.stats)

        if (response.data.latestOrders) {
          setOrders(response.data.latestOrders)
        }

        if (response.data.latestUsers) {
          setUsers(response.data.latestUsers)
        }

        if (response.data.topProducts) {
          setTopProducts(response.data.topProducts)
        }

      }

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchDashboardStats()
  }, [])


  const chartData = [
    { name: "Products", value: stats.totalProducts },
    { name: "Users", value: stats.totalUsers },
    { name: "Orders", value: stats.totalOrders }
  ]

  const revenueData = [
    { name: "Revenue", value: stats.revenue }
  ]

  const COLORS = ["#2563EB", "#16A34A", "#F59E0B"]

  return (

    <div className="w-full p-6 lg:p-10">

      <h1 className="mb-8 text-2xl font-bold">
        Admin Dashboard
      </h1>

      {/* STATS CARDS */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div className="p-6 bg-white shadow rounded-xl">
          <p className="text-gray-500">Products</p>
          <h2 className="text-2xl font-bold">{stats.totalProducts}</h2>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <p className="text-gray-500">Users</p>
          <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold">{stats.totalOrders}</h2>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">${stats.revenue}</h2>
        </div>

      </div>


      {/* CHARTS */}

      <div className="grid gap-8 mt-10 lg:grid-cols-2">

        <div className="p-6 bg-white shadow rounded-xl">

          <h2 className="mb-4 text-lg font-semibold">
            Orders Overview
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563EB" />
            </BarChart>
          </ResponsiveContainer>

        </div>


        <div className="p-6 bg-white shadow rounded-xl">

          <h2 className="mb-4 text-lg font-semibold">
            Revenue
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>

              <Pie
                data={revenueData}
                dataKey="value"
                outerRadius={100}
                fill="#16A34A"
                label
              >
                {revenueData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>


      {/* TOP PRODUCTS */}

      <div className="p-6 mt-10 bg-white shadow rounded-xl">

        <h2 className="mb-4 text-lg font-semibold">
          Top Selling Products
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {topProducts.map((product, index) => (

            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >

              <img
                src={product.image?.[0]}
                alt=""
                className="object-cover w-12 h-12 rounded"
              />

              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-500">
                  Sold: {product.totalSold}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* LATEST ORDERS */}

      <div className="p-6 mt-10 bg-white shadow rounded-xl">

        <h2 className="mb-4 text-lg font-semibold">
          Latest Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-left border-b">

                <th className="py-2">Order ID</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order, index) => (

                <tr key={index} className="border-b">

                  <td className="py-2">
                    {order._id.slice(-6)}
                  </td>

                  <td className="py-2">
                    ${order.amount}
                  </td>

                  <td className="py-2">
                    {order.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* RECENT USERS */}

      <div className="p-6 mt-10 bg-white shadow rounded-xl">

        <h2 className="mb-4 text-lg font-semibold">
          Recent Users
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-left border-b">

                <th className="py-2">Name</th>
                <th className="py-2">Email</th>

              </tr>

            </thead>

            <tbody>

              {users.map((user, index) => (

                <tr key={index} className="border-b">

                  <td className="py-2">
                    {user.name}
                  </td>

                  <td className="py-2">
                    {user.email}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )

}

export default Overview