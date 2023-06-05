import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,

    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
  import { useState,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
  export default function Login() {

const navigate=useNavigate()
const [data,setdata]=useState([])
const[checkemail,setcheckemail]=useState("")
const[checkpss,setcheckpss]=useState("")
useEffect(() => {
  
axios.get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/users`)
.then((res)=>setdata(res.data))
 
}, [])


const onsubmit=()=>{
  
  data?.map((item)=>{
    if(item.email===checkemail && item.password===checkpss){
      alert(`login Succes`)
      navigate("/")
    }
  
// if(data.length===+item.id){
//   alert(`wrong email or password`)
// }
return 0
  })
}
const clicked=()=>{
  navigate("/admin")
}

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Button colorScheme={'orange'} onClick={clicked}> Login As Admin</Button>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={checkemail} onChange={(e)=>setcheckemail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={checkpss} onChange={(e)=>setcheckpss(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'orange.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  colorScheme={'orange'}
                  onClick={onsubmit}
                  _hover={{
                    bg: 'orange.400',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }