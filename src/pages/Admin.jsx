import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

  export default function Admin() {


    const navigate=useNavigate()
const [adminemail,setadminemail]=useState("")
const [adminpassword,setadminpassword]=useState("")

const adminid="abc@gmail.com"
const password="pankaj"

const onsubmit=(e)=>{
    e.preventDefault()
    console.log(adminemail,adminpassword)
    if(adminid===adminemail && password===adminpassword){
        alert(`login success`)
        navigate("/admindata")
    }else{
        alert(`wrong id or pass`)
    }
}

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'} color={"#fe0000"}>Sign in as Admin</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={adminemail} onChange={(e)=>setadminemail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  value={adminpassword} onChange={(e)=>setadminpassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'#fe0000'}>Forgot password?</Link>
              </Stack>
              <Button bg={'#fe0000'} color={"white"} variant={'solid'} onClick={onsubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://c0.wallpaperflare.com/preview/28/238/545/experience-feedback-survey-customer.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }