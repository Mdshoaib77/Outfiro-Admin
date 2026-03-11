// // // // // import React from "react";

// // // // // const Reports = () => {
// // // // //   return (
// // // // //     <div className="p-6">

// // // // //       <h2 className="mb-6 text-2xl font-bold">Reports</h2>

// // // // //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

// // // // //         <div className="p-5 bg-white shadow rounded-xl">
// // // // //           <h3>Monthly Sales</h3>
// // // // //           <p className="text-xl font-semibold">$5000</p>
// // // // //         </div>

// // // // //         <div className="p-5 bg-white shadow rounded-xl">
// // // // //           <h3>Top Product</h3>
// // // // //           <p className="text-xl font-semibold">Winter Jacket</p>
// // // // //         </div>

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Reports;


// // // // import React from 'react'

// // // // const Reports = () => {
// // // //   return (
// // // //     <div>
      
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Reports



// // // import React, { useEffect, useState } from 'react'
// // // import axios from "axios"
// // // import { motion } from "framer-motion"
// // // import { backend_url } from "../App"

// // // import {
// // //   BarChart,
// // //   Bar,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   CartesianGrid,
// // //   ResponsiveContainer,
// // //   PieChart,
// // //   Pie,
// // //   Cell
// // // } from "recharts"

// // // const Reports = () => {

// // //   const [report, setReport] = useState({
// // //     totalRevenue: 0,
// // //     totalOrders: 0,
// // //     totalUsers: 0,
// // //     totalProducts: 0,
// // //     revenueChart: [],
// // //     ordersChart: []
// // //   })

// // //   const fetchReports = async () => {

// // //     try {

// // //       const response = await axios.get(
// // //         backend_url + "/api/admin/reports",
// // //         { headers: { token: localStorage.getItem("token") } }
// // //       )

// // //       if (response.data.success) {
// // //         setReport(response.data.report)
// // //       }

// // //     } catch (error) {
// // //       console.log(error)
// // //     }

// // //   }

// // //   useEffect(() => {
// // //     fetchReports()
// // //   }, [])

// // //   const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444"]

// // //   return (

// // //     <div className='w-full p-4 sm:p-8'>

// // //       {/* Title */}

// // //       <motion.h1
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         className='mb-6 text-2xl font-bold'
// // //       >
// // //         Reports & Analytics
// // //       </motion.h1>


// // //       {/* Stats */}

// // //       <div className='grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-4'>

// // //         <motion.div
// // //           whileHover={{ scale: 1.05 }}
// // //           className='p-6 bg-white shadow rounded-xl'
// // //         >
// // //           <h2 className='text-gray-500'>Total Revenue</h2>
// // //           <p className='text-2xl font-bold'>${report.totalRevenue}</p>
// // //         </motion.div>

// // //         <motion.div
// // //           whileHover={{ scale: 1.05 }}
// // //           className='p-6 bg-white shadow rounded-xl'
// // //         >
// // //           <h2 className='text-gray-500'>Total Orders</h2>
// // //           <p className='text-2xl font-bold'>{report.totalOrders}</p>
// // //         </motion.div>

// // //         <motion.div
// // //           whileHover={{ scale: 1.05 }}
// // //           className='p-6 bg-white shadow rounded-xl'
// // //         >
// // //           <h2 className='text-gray-500'>Total Users</h2>
// // //           <p className='text-2xl font-bold'>{report.totalUsers}</p>
// // //         </motion.div>

// // //         <motion.div
// // //           whileHover={{ scale: 1.05 }}
// // //           className='p-6 bg-white shadow rounded-xl'
// // //         >
// // //           <h2 className='text-gray-500'>Total Products</h2>
// // //           <p className='text-2xl font-bold'>{report.totalProducts}</p>
// // //         </motion.div>

// // //       </div>


// // //       {/* Charts */}

// // //       <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>

// // //         {/* Revenue Chart */}

// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           className='p-6 bg-white shadow rounded-xl'
// // //         >

// // //           <h2 className='mb-4 text-lg font-semibold'>
// // //             Revenue Chart
// // //           </h2>

// // //           <ResponsiveContainer width="100%" height={300}>

// // //             <BarChart data={report.revenueChart}>

// // //               <CartesianGrid strokeDasharray="3 3" />

// // //               <XAxis dataKey="name" />

// // //               <YAxis />

// // //               <Tooltip />

// // //               <Bar dataKey="revenue" fill="#6366F1" />

// // //             </BarChart>

// // //           </ResponsiveContainer>

// // //         </motion.div>


// // //         {/* Orders Pie Chart */}

// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           className='p-6 bg-white shadow rounded-xl'
// // //         >

// // //           <h2 className='mb-4 text-lg font-semibold'>
// // //             Orders Distribution
// // //           </h2>

// // //           <ResponsiveContainer width="100%" height={300}>

// // //             <PieChart>

// // //               <Pie
// // //                 data={report.ordersChart}
// // //                 dataKey="value"
// // //                 nameKey="name"
// // //                 cx="50%"
// // //                 cy="50%"
// // //                 outerRadius={100}
// // //                 label
// // //               >

// // //                 {report.ordersChart.map((entry, index) => (

// // //                   <Cell
// // //                     key={index}
// // //                     fill={COLORS[index % COLORS.length]}
// // //                   />

// // //                 ))}

// // //               </Pie>

// // //               <Tooltip />

// // //             </PieChart>

// // //           </ResponsiveContainer>

// // //         </motion.div>

// // //       </div>

// // //     </div>

// // //   )
// // // }

// // // export default Reports

// // import React, { useEffect, useState } from 'react'
// // import axios from "axios"
// // import { backend_url } from "../App"

// // const Reports = () => {

// //   const [report, setReport] = useState({
// //     totalRevenue: 0,
// //     totalOrders: 0,
// //     totalUsers: 0,
// //     totalProducts: 0
// //   })

// //   const fetchReports = async () => {

// //     try {

// //       const response = await axios.get(
// //         backend_url + "/api/admin/reports",
// //         { headers: { token: localStorage.getItem("token") } }
// //       )

// //       if (response.data.success) {

// //         setReport({
// //           totalRevenue: response.data.totalRevenue || 0,
// //           totalOrders: response.data.totalOrders || 0,
// //           totalUsers: response.data.totalUsers || 0,
// //           totalProducts: response.data.totalProducts || 0
// //         })

// //       }

// //     } catch (error) {
// //       console.log(error)
// //     }

// //   }

// //   useEffect(() => {
// //     fetchReports()
// //   }, [])

// //   return (
// //     <div className='w-full p-8'>

// //       <h1 className='mb-6 text-2xl font-bold'>
// //         Reports
// //       </h1>

// //       <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>

// //         <div className='p-6 bg-white shadow rounded-xl'>
// //           <h2 className='text-gray-500'>Revenue</h2>
// //           <p className='text-2xl font-bold'>${report.totalRevenue}</p>
// //         </div>

// //         <div className='p-6 bg-white shadow rounded-xl'>
// //           <h2 className='text-gray-500'>Orders</h2>
// //           <p className='text-2xl font-bold'>{report.totalOrders}</p>
// //         </div>

// //         <div className='p-6 bg-white shadow rounded-xl'>
// //           <h2 className='text-gray-500'>Users</h2>
// //           <p className='text-2xl font-bold'>{report.totalUsers}</p>
// //         </div>

// //         <div className='p-6 bg-white shadow rounded-xl'>
// //           <h2 className='text-gray-500'>Products</h2>
// //           <p className='text-2xl font-bold'>{report.totalProducts}</p>
// //         </div>

// //       </div>

// //     </div>
// //   )
// // }

// // export default Reports


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { backend_url } from "../App";
// import { FaDollarSign, FaShoppingCart, FaUsers, FaBox } from "react-icons/fa";

// const Reports = () => {

//   const [report, setReport] = useState({
//     totalRevenue: 0,
//     totalOrders: 0,
//     totalUsers: 0,
//     totalProducts: 0
//   });

//   const [loading, setLoading] = useState(true);

//   const fetchReports = async () => {

//     try {

//       const response = await axios.get(
//         backend_url + "/api/admin/reports",
//         { headers: { token: localStorage.getItem("token") } }
//       );

//       if (response.data.success) {

//         setReport({
//           totalRevenue: response.data.totalRevenue || 0,
//           totalOrders: response.data.totalOrders || 0,
//           totalUsers: response.data.totalUsers || 0,
//           totalProducts: response.data.totalProducts || 0
//         });

//       }

//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }

//   };

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   if (loading) {
//     return (
//       <div className="p-8">
//         <p className="text-lg font-semibold">Loading reports...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full p-8">

//       <h1 className="mb-8 text-3xl font-bold">
//         Reports Dashboard
//       </h1>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

//         <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
//           <div>
//             <h2 className="text-gray-500">Revenue</h2>
//             <p className="text-2xl font-bold text-green-600">
//               ${report.totalRevenue.toLocaleString()}
//             </p>
//           </div>
//           <FaDollarSign size={30} className="text-green-500" />
//         </div>

//         <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
//           <div>
//             <h2 className="text-gray-500">Orders</h2>
//             <p className="text-2xl font-bold">
//               {report.totalOrders}
//             </p>
//           </div>
//           <FaShoppingCart size={30} className="text-blue-500" />
//         </div>

//         <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
//           <div>
//             <h2 className="text-gray-500">Users</h2>
//             <p className="text-2xl font-bold">
//               {report.totalUsers}
//             </p>
//           </div>
//           <FaUsers size={30} className="text-purple-500" />
//         </div>

//         <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
//           <div>
//             <h2 className="text-gray-500">Products</h2>
//             <p className="text-2xl font-bold">
//               {report.totalProducts}
//             </p>
//           </div>
//           <FaBox size={30} className="text-orange-500" />
//         </div>

//       </div>

//       {/* Chart Section */}
//       <div className="p-6 mt-10 bg-white shadow rounded-xl">

//         <h2 className="mb-4 text-xl font-semibold">
//           Revenue Overview
//         </h2>

//         <p className="text-gray-500">
//           Chart analytics can be added here (Recharts / Chart.js).
//         </p>

//       </div>

//     </div>
//   );
// };

// export default Reports;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../App";

import { FaDollarSign, FaShoppingCart, FaUsers, FaBox } from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const Reports = () => {

  const [report, setReport] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0
  });

  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {

    try {

      const response = await axios.get(
        backend_url + "/api/admin/reports",
        { headers: { token: localStorage.getItem("token") } }
      );

      if (response.data.success) {

        setReport({
          totalRevenue: response.data.totalRevenue || 0,
          totalOrders: response.data.totalOrders || 0,
          totalUsers: response.data.totalUsers || 0,
          totalProducts: response.data.totalProducts || 0
        });

      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchReports();
  }, []);

  /* Dummy chart data (later replace with backend data) */
  const chartData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4780 },
    { name: "May", revenue: 5890 },
    { name: "Jun", revenue: 6390 }
  ];

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-lg font-semibold">Loading reports...</p>
      </div>
    );
  }

  return (

    <div className="w-full p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Reports Dashboard
      </h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
          <div>
            <h2 className="text-gray-500">Revenue</h2>
            <p className="text-2xl font-bold text-green-600">
              ${report.totalRevenue.toLocaleString()}
            </p>
          </div>
          <FaDollarSign size={30} className="text-green-500" />
        </div>

        <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
          <div>
            <h2 className="text-gray-500">Orders</h2>
            <p className="text-2xl font-bold">
              {report.totalOrders}
            </p>
          </div>
          <FaShoppingCart size={30} className="text-blue-500" />
        </div>

        <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
          <div>
            <h2 className="text-gray-500">Users</h2>
            <p className="text-2xl font-bold">
              {report.totalUsers}
            </p>
          </div>
          <FaUsers size={30} className="text-purple-500" />
        </div>

        <div className="flex items-center justify-between p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
          <div>
            <h2 className="text-gray-500">Products</h2>
            <p className="text-2xl font-bold">
              {report.totalProducts}
            </p>
          </div>
          <FaBox size={30} className="text-orange-500" />
        </div>

      </div>

      {/* REVENUE CHART */}
      <div className="p-6 mt-10 bg-white shadow rounded-xl">

        <h2 className="mb-6 text-xl font-semibold">
          Revenue Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default Reports;