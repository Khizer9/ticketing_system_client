import React from 'react'
import AdminLayout from './components/AdminLayout'
import AllUsersComponent from '../components/AllUsersComponent'

const AllUsers = () => {
  return (
    <AdminLayout>
        <AllUsersComponent heading={"All Clients"} url={"/all-client"}/>
    </AdminLayout>
  )
}

export default AllUsers
