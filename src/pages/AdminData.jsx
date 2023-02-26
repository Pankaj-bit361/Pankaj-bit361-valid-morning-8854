

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from "@chakra-ui/react"
const AdminData = () => {
const[data,setdata]=useState([])

const fetchandupdate=()=>{
  axios.get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`)
  .then((res)=>setdata(res.data))
}

useEffect(()=>{
fetchandupdate()
},[])

const handledelete=(id)=>{
  axios.delete(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users/${id}`)
  .then((res)=>{
    fetchandupdate()
  })
}
console.log(data)
  return (
    
    <div>
   <TableContainer>
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th>Full Name</Th>
        <Th>Email</Th>
        <Th>Password</Th>
        <Th>User No.</Th>
        <Th>Delete</Th>

      </Tr>
    </Thead>
    <Tbody>
    {data.map((item)=>(
      <>
      <Tr>
        <Td>{item.name} {item.lastname}</Td>
        <Td>{item.email}</Td>
        <Td >{item.password}</Td>
        <Td>{item.id}</Td>
        <Button onClick={()=>handledelete(item.id)} colorScheme={'red'}>Remove User</Button>
      </Tr>
     
      </>
    ))}
     
    </Tbody>
    
  </Table>
</TableContainer>
    
    </div>
  )
}

export default AdminData
