import React, { useEffect, useState } from "react"
import axios from "axios"
import { backend_url } from "../App"

const ContactMessages = () => {

  const [contacts,setContacts] = useState([])

  const fetchContacts = async ()=>{

    try{

      const response = await axios.get(

        backend_url + "/api/contact/list",

        { headers:{ token: localStorage.getItem("token") } }

      )

      if(response.data.success){

        setContacts(response.data.contacts)

      }

    }catch(error){

      console.log(error)

    }

  }

  useEffect(()=>{

    fetchContacts()

  },[])


  return (

    <div className="w-full p-8">

      <h1 className="mb-6 text-2xl font-bold">
        Contact Messages
      </h1>


      <div className="grid gap-6">

        {contacts.map((item,index)=>(

          <div
            key={index}
            className="p-6 bg-white shadow rounded-xl"
          >

            <div className="flex flex-col gap-3">

              <div className="flex justify-between">

                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {new Date(item.date).toDateString()}
                </p>

              </div>

              <p className="text-sm text-gray-500">
                {item.email}
              </p>

              <h3 className="font-medium">
                {item.subject}
              </h3>

              <p className="text-gray-700">
                {item.message}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default ContactMessages