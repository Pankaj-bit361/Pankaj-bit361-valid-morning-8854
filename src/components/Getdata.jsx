import React, { useEffect ,useState} from 'react'

import axios from "axios"
import { Button, Input,Center } from '@chakra-ui/react'

const Getdata = () => {
const [image,setimage]=useState("")
const fetchdata=()=>{
    axios.get(`https://test-api-hvrg.onrender.com/mydata`)
    .then((res)=>console.log(res.data))
}
useEffect(()=>{
fetchdata()
},[])
const handledelete=()=>{
    axios.delete(`https://test-api-hvrg.onrender.com/mydata/101`)
}

const postimage=()=>{
    let ob={image:image}
    axios.post(`https://test-api-hvrg.onrender.com/mydata`,ob)
    setimage("")
}

  return (
    <div>
      <button onClick={handledelete}>Deletedata</button>
<Input type="text" value={image} _placeholder="put the data" onChange={(e)=>setimage(e.target.value)} />

<Center>
     <Button  mt={10} mb={10} p={10}  onClick={postimage} >Post</Button>
     </Center>
    </div>
  )
}

export default Getdata
