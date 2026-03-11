// import React from "react";

// const ManageUsers = () => {
//   return (
//     <div className="p-6">

//       <h2 className="mb-6 text-2xl font-bold">Manage Users</h2>

//       <table className="w-full border">

//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-3">Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>

//           <tr className="border-t">
//             <td>John Doe</td>
//             <td>[email protected]</td>
//             <td>User</td>
//             <td>
//               <button className="text-red-500">Delete</button>
//             </td>
//           </tr>

//         </tbody>

//       </table>

//     </div>
//   );
// };

// export default ManageUsers;

// import React from 'react'

// const ManageUsers = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ManageUsers


import React, { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { backend_url } from "../App"

const ManageUsers = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        backend_url + "/api/admin/users",
        { headers: { token: localStorage.getItem("token") } }
      )

      if (response.data.success) {
        setUsers(response.data.users)
      }

    } catch (error) {
      console.log(error)
    }

  }

  const deleteUser = async (id) => {

    try {

      await axios.post(
        backend_url + "/api/admin/delete-user",
        { id },
        { headers: { token: localStorage.getItem("token") } }
      )

      fetchUsers()

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchUsers()
  }, [])


  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 lg:p-10"
    >

      <h1 className="mb-6 text-2xl font-bold">
        Manage Users
      </h1>


      <div className="overflow-x-auto bg-white shadow rounded-xl">

        <table className="w-full text-left">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Action</th>

            </tr>

          </thead>


          <tbody>

            {users.map((user, index) => (

              <motion.tr
                key={user._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="border-b"
              >

                <td className="px-4 py-3">
                  {user.name}
                </td>

                <td className="px-4 py-3">
                  {user.email}
                </td>

                <td className="px-4 py-3">

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => deleteUser(user._id)}
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg"
                  >
                    Delete
                  </motion.button>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </motion.div>

  )

}

export default ManageUsers