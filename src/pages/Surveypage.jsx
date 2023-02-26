import  { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Center, Heading, Text ,Button ,Box, Flex, SimpleGrid, Input,Checkbox,Image} from '@chakra-ui/react'
import "./Survey.css"
import Footer from '../components/Footer'
import {Link as Routerlink} from "react-router-dom"

const Surveypage = () => {
    const page=useParams()
    const {id} =page
   const [data,setdata]=useState([])
const fetchdata=(id)=>{
    axios.get(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/survey/${id}`)
    .then((res)=>setdata(res.data))
}

useEffect(()=>{

    fetchdata(id)

},[id])
 
  

const {title}=data
console.log(title)
  return (
    <div>
     <Center mt={10}><Heading >{title}</Heading></Center>
     <Center mt={10}><Text fontSize={"xl"} >Learn how to keep your customers happy and turn them into advocates for your business.</Text></Center>
     <Center mt={10}><Routerlink to="/signup"><Button  colorScheme={'orange'}>Signup for free</Button></Routerlink></Center>

     <Box className='question' border={"1px solid orange"}>
     <Box className='box1'>
     <Center mt={10}>
       <Text fontSize={"xl"} color={'orange.400'} >{title} Survey</Text></Center>
       <Center>
       <Text w={"80%"} fontSize={"lg"} mt={5}>1. How Likely is it that you would recommend this company to a friend or Colleague?</Text></Center>
       <Center>
       <Flex mt={10} w={"80%"} justifyContent={'space-between'}> <Text fontSize={"xs"}>NOT AT ALL LIKELY</Text> <Text fontSize={"xs"}>EXTREME LIKELY</Text></Flex></Center>
      
       <Center  ><Button w={"8%"} border={'1px solid orange'}>1</Button> <Button border={'1px solid orange'} w={"8%"}>2</Button> <Button border={'1px solid orange'} w={"8%"}>3</Button> <Button border={'1px solid orange'} w={"8%"}>4</Button> <Button border={'1px solid orange'} w={"8%"}>5</Button> <Button border={'1px solid orange'} w={"8%"}>6</Button> <Button border={'1px solid orange'} w={"8%"}>7</Button> <Button border={'1px solid orange'} w={"8%"}>8</Button> <Button border={'1px solid orange'} w={"8%"}>9</Button> <Button border={'1px solid orange'} w={"8%"}>10</Button></Center>
       </Box>
<Box className='box2' mt={20}>
    <Center><Text textAlign={'left'} fontSize={"lg"}>2. Overall,how satisfied or dissatisfied are you with our company?</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2}  spacing={5}>
   
       <Checkbox variant="circular" colorScheme={'orange'}>Very Satisfied</Checkbox>
       <Checkbox variant="circular" colorScheme={'orange'}>Somewhat satisfied</Checkbox>
       <Checkbox variant="circular" colorScheme={'orange'}>Neither Satisfied not dissatisfied</Checkbox>
       <Checkbox variant="circular" colorScheme={'orange'}>Somewhat dissatisfied</Checkbox>
       <Checkbox variant="circular" colorScheme={'orange'}>Very dissatisfied</Checkbox>
    </SimpleGrid></Center>
  
</Box>
<Box className='box3' mt={20}>
    <Center><Text textAlign={'left'} w={"80%"} fontSize={"lg"}>3. Which of the following words would you use to describe our Select all that apply.</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
       <Checkbox color={"black"}  colorScheme={'orange'}>Reliable</Checkbox>
       <Checkbox  colorScheme={'orange'}>High quality</Checkbox>
       <Checkbox  colorScheme={'orange'}>Useful</Checkbox>
       <Checkbox colorScheme={'orange'}>Unique</Checkbox>
       <Checkbox  colorScheme={'orange'}>Good value for money</Checkbox>
       <Checkbox  colorScheme={'orange'}>Overpriced</Checkbox>
       <Checkbox  colorScheme={'orange'}>Impractical</Checkbox>
       <Checkbox  colorScheme={'orange'}>Ineffective</Checkbox>
       <Checkbox colorScheme={'orange'}>Poor quality</Checkbox>
       <Checkbox  colorScheme={'orange'}>Unreliable</Checkbox>
    </SimpleGrid></Center>
  
</Box>
<Box className='box4' mt={20}>
    <Center><Text w={"80%"} textAlign={'left'} fontSize={"lg"}>4. How well do our producst meet your needs?</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
    <Checkbox></Checkbox>
       <Checkbox  colorScheme={'orange'}>Extremely well</Checkbox>
       <Checkbox  colorScheme={'orange'}>Very well</Checkbox>
       <Checkbox  colorScheme={'orange'}>Somewhat well</Checkbox>
       <Checkbox colorScheme={'orange'}>Not so well</Checkbox>
       <Checkbox  colorScheme={'orange'}>Not at all well</Checkbox>
      
    </SimpleGrid></Center>
  
</Box>
<Box className='box5' mt={20}>
    <Center><Text w={"80%"} textAlign={'left'} fontSize={"lg"}>5. How would you rate the quality of the product</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
       <Checkbox  colorScheme={'orange'}>Very high quality</Checkbox>
       <Checkbox  colorScheme={'orange'}>High quality</Checkbox>
       <Checkbox  colorScheme={'orange'}>Neither high nor low quality</Checkbox>
       <Checkbox colorScheme={'orange'}>low quality</Checkbox>
       <Checkbox  colorScheme={'orange'}>Very low quality</Checkbox>
       
    </SimpleGrid></Center>
  
</Box>
<Box className='box6' mt={20}>
    <Center><Text w={"80%"} textAlign={'left'} fontSize={"lg"}>6.How would you rate the value for money of the product?</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
       <Checkbox  colorScheme={'orange'}>Excellent</Checkbox>
       <Checkbox  colorScheme={'orange'}>Above average</Checkbox>
       <Checkbox  colorScheme={'orange'}>Average</Checkbox>
       <Checkbox colorScheme={'orange'}>Below average</Checkbox>
       <Checkbox  colorScheme={'orange'}>Poor</Checkbox>
      
    </SimpleGrid></Center>
  
</Box>
<Box className='box7' mt={20}>
    <Center><Text w={"80%"} textAlign={'left'} fontSize={"lg"}>7. How responsive have been to yout questions about services?</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
       <Checkbox  colorScheme={'orange'}>Extremely responsive</Checkbox>
       <Checkbox  colorScheme={'orange'}>Very responsive</Checkbox>
       <Checkbox  colorScheme={'orange'}>Somewhat responsive</Checkbox>
       <Checkbox colorScheme={'orange'}>Not so responsive</Checkbox>
       <Checkbox  colorScheme={'orange'}>Not at all responsive</Checkbox>
       <Checkbox  colorScheme={'orange'}>Not applicable</Checkbox>
      
    </SimpleGrid></Center>
  
</Box>
<Box className='box8' mt={20}>
    <Center><Text w={"80%"} textAlign={'left'} fontSize={"lg"}>8. How long have you been customer of our company?</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
       <Checkbox  colorScheme={'orange'}>This is my first purchase</Checkbox>
       <Checkbox  colorScheme={'orange'}>Less than six month</Checkbox>
       <Checkbox  colorScheme={'orange'}>Six months to be a year</Checkbox>
       <Checkbox colorScheme={'orange'}>1-2 years</Checkbox>
       <Checkbox  colorScheme={'orange'}>3 or more years</Checkbox>
       <Checkbox  colorScheme={'orange'}>i haven't made a purchase yet</Checkbox>
       
    </SimpleGrid></Center>
  
</Box>
<Box className='box9' mt={20}>
    <Center><Text w={"80%"} textAlign={'left'} fontSize={"lg"}>9.How likely are you to purchase any of our products again?</Text>  </Center>
    <Center>
    <SimpleGrid w={"80%"} mt={10} columns={2} spacing={5}>
       <Checkbox  variant="circular" colorScheme={'orange'}>Extremely likely</Checkbox>
       <Checkbox  variant="circular" colorScheme={'orange'}>Very likely</Checkbox>
       <Checkbox  colorScheme={'orange'}>Somewhat likely</Checkbox>
       <Checkbox colorScheme={'orange'}>Not so likely</Checkbox>
       <Checkbox  colorScheme={'orange'}>Not at all likely</Checkbox>
     
       
    </SimpleGrid></Center>
  
</Box>
<Box mt={20}> 
  <Center>
    <Text textAlign={'left'} w={"80%"} fontSize={"lg"}>
      10. Do you have any other comments, questions or concerns?
    </Text>
  </Center>
  <Center>
    <Input textAlign={'left'} type="text" w={"30%"}/>
  </Center>
</Box>

<Text mt={10} className='' bg={'orange.400'} h={'50px'} color={'#ffffff'}></Text>
     </Box>
<Box mt={10}>
  <Center>
    <Button colorScheme={'orange'}>Try this template</Button>
  </Center>
</Box>
<Center>
<Box w={"50%"} mt={20}>
    <Text textAlign={'left'} fontSize={"lg"}>If you want your business to grow, it’s critical that you keep your existing customers happy. To do so, you’ll need to measure and understand customer satisfaction. Customer satisfaction is defined as a client’s overall level of satisfaction from using your product or service.</Text>
</Box>
</Center>
<Center>
<Box w={"50%"} mt={10}>
    <Text textAlign={'left'} fontSize={"lg"}>Our expert-written customer satisfaction template was written by experts to help you get started. From convenience to professionalism, customer satisfaction surveys let you effectively gauge customer satisfaction and build a stronger business strategy.</Text>
</Box>
</Center>
<Center>
<Box w={"50%"} mt={10}>
    <Text textAlign={'left'} fontSize={"lg"}>Did your customers find what they were looking for? Are they satisfied? Are you asking the right questions? Our template can help you find and select customer satisfaction survey questions that solicit actionable feedback you can turn into meaningful customer loyalty.</Text>
</Box>
</Center>
<Center>
<Box w={"50%"} mt={10}>
    <Text textAlign={'left'} fontSize={"lg"}>ur template gives you questions that will help you quickly survey users, so you can discover bugs or confusing features, understand why customers aren’t checking out or upgrading, or improve your gaming experiences.</Text>
</Box>
</Center>
<Center mt={10}>
  <Heading w={"50%"}>How do customer satisfaction surveys work?</Heading>
</Center>
<Center>
<Box w={"50%"} mt={10}>
    <Text textAlign={'left'} fontSize={"lg"}>Understanding your clients and meeting customer expectations will help you offer better products and services day in and day out. How do you compare to competitors? Do customers feel like you offer value and quality? Would they recommend you to someone else?</Text>
</Box>
</Center>
<Center>
<Box w={"50%"} mt={10}>
    <Text textAlign={'left'} fontSize={"lg"}>Our customer satisfaction template can help you answer these questions and ensure that you're delivering a valuable customer experience. You can also customize our templates and add questions if there’s a part of the customer experience you want to explore more fully.</Text>
</Box>
</Center>
<Center>
<Box w={"50%"} mt={10}>
    <Text textAlign={'left'} fontSize={"lg"}>To create an online survey using the Customer Satisfaction survey template, just sign up or sign in to SurveyMonkey. You’ll be able to choose the template when you begin creating a survey.</Text>
</Box>
</Center>

<Center mt={10}>
  <Text fontSize={"2xl"}>Explore which features support this survey template</Text>
</Center>

<Center mt={5}>
  <Box w={"50%"}>
    <Text textAlign={"center"} fontSize={"lg"}>We have so many powerful features to help you launch surveys quickly, but here are our most popular ones for new users.</Text>
  </Box>
</Center>


<SimpleGrid columns={3} mt={20} w={"90%"} ml={"5%"}>
  <Box  className='hover1'  bg={"#f6f6f6"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
    <Image ml={"10%"} w="70px" src="https://www.nicepng.com/png/detail/918-9187081_book-and-pen-png-book-and-pen-logo.png"/>
    <Text ml={"10%"} mt={10} fontSize={"lg"}>Customizable survey experiences</Text>
    <Text ml={"10%"} w={"90%"}  mt={10} fontSize={"md"}>Out-of-the-box themes, accessible color palettes, custom fonts, branding.</Text>
    <Box pb={10}><Button  border={"1px solid black"} ml={"10%"} mt={10} >See features</Button></Box>
  </Box>
  <Box className='hover1' bg={"#f6f6f6"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
    <Image ml={"10%"} w="70px" src="https://www.nicepng.com/png/detail/918-9187081_book-and-pen-png-book-and-pen-logo.png"/>
    <Text  ml={"10%"} mt={10} fontSize={"lg"}>Many ways to send your surveys</Text>
    <Text ml={"10%"} w={"90%"} mt={10} fontSize={"md"}>Collect survey responses via email, website, SMS, social media, QR codes, offline.</Text>
    <Box pb={10}><Button border={"1px solid black"} ml={"10%"} mt={10} >Explore Surveys</Button></Box>
  </Box>
  <Box className='hover1' bg={"#f6f6f6"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
    <Image ml={"10%"}  w="70px" src="https://www.nicepng.com/png/detail/918-9187081_book-and-pen-png-book-and-pen-logo.png"/>
    <Text  ml={"10%"} mt={10} fontSize={"lg"}>Survey analysis, no training required</Text>
    <Text  ml={"10%"} w={"90%"} mt={10} fontSize={"md"}>Automatic results summaries, filters, custom dashboards, crosstab reports, text analysis.</Text>
    <Box pb={10}>
    <Button border={"1px solid black"} ml={"10%"} mt={10} >See features</Button></Box>
  </Box>
</SimpleGrid>
<Center>
<Box mt={20}>
  <Text fontSize={"xl"}>Additional resources to help you launch successful survey projects</Text>
</Box>
</Center>

<Center mt={20}>
  <SimpleGrid columns={[1,2,3]} spacing={10} w={"95%"}>
    <Box className='hover1' boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
      <Image src="https://prod.smassets.net/assets/website/2.204.1/images/mntv-success-stories.png"/>
      <Text ml={"10%"} w={"80%"} mt={10} fontSize={"xl"} >Success Story</Text>
      <Text ml={"10%"} w={"80%"} mt={10} fontSize={"md"} >Read about our customers, explore webinars, and get guides on collecting feedback in your industry.</Text>
      <Button  border={"1px solid black"} mb={10} ml={"10%"} mt={10} >Explore Resources</Button>
    </Box>
    <Box className='hover1' boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
      <Image src="https://prod.smassets.net/assets/website/2.204.1/images/mntv-blog.png"/>
      <Text ml={"10%"} w={"80%"} mt={10} fontSize={"xl"} >Blog</Text>
      <Text ml={"10%"}  w={"80%"} mt={10} >Get tips on how to create better surveys, hear the latest product news, or check out our research.</Text>
      <Button  border={"1px solid black"} mb={10} ml={"10%"} mt={10} >See Curiosity at work</Button>
    </Box>
    <Box className='hover1' boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
      <Image src="https://prod.smassets.net/assets/website/2.204.1/images/mntv-help-center.png"/>
     <Center> <Text fontSize={"xl"} w={"80%"} mt={10}  >Help Center</Text></Center>
     <Center> <Text   w={"80%"} mt={10} >Access tutorials on how features work, learn more about billing, and contact Customer Support.</Text></Center>
      <Button  border={"1px solid black"} ml={"10%"} mb={10} mt={10} >Vist help center</Button>
    </Box>
  </SimpleGrid>
</Center>
<Footer/>
    </div>
  )
}

export default Surveypage
