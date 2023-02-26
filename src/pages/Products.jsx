
import React, { useEffect ,useState} from 'react'
import { Heading, SimpleGrid,Box ,Image,Text,Center, Divider} from '@chakra-ui/react'
import axios from 'axios'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import {Link as Routerlink} from "react-router-dom"
const Products = () => {

  const [page,setpage]=useState(1)  
const [data,setdata]=useState([])
const fetchdata=(page)=>{
axios.get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/survey?limit=15&page=${page}`)
.then((res)=>{setdata(res.data)})
}

useEffect(()=>{
fetchdata(page)
},[page])

const handlepage=(page)=>{
setpage(page)
}


  return (
    <div>
    <Center>
      <Heading>Please Select A Template</Heading></Center>
<Box mt={20}>
<Center>
    <SimpleGrid columns={[2,3,4,5]} spacing={10} w={"90%"}>
       {data?.map((item)=>(

        <Box key={item.id}  ><Routerlink to={`/products/${item.id}`}>
<Image src={item.image}/>
<Center>
<Text w={"50%"} color={'white'} mt={"-90%"} textAlign={"center"} mr={20}>{item.title}</Text></Center>
</Routerlink>
        </Box>
       ))}
    </SimpleGrid>
    </Center>
</Box>
<Pagination handlepage={handlepage}/>
<Divider mt={10}/>
<Footer/>
    </div>
  )
}

export default Products
