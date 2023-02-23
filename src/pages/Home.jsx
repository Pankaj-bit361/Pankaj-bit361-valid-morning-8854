
import Typical from 'react-typical'
import { Button, Center, Heading,Box ,Text, SimpleGrid, Grid,Image, GridItem} from '@chakra-ui/react'
import React from 'react'
import image2 from "../image/1st.png"
import image3 from "../image/@nd.png"
import image4 from "../image/3rd.png"
import image5 from "../image/4th.png"
import image6 from "../image/5th.png"
import image7 from "../image/Crown.jpg"
const Home = () => {
  return (
    <div>
    <Box>
     <Center>
     <Heading fontSize="5xl" color={'blackAlpha.900'} mt={40}>
      <Typical 
        steps={['Are My Customer actually Satisfied ?', 3000,"Will My Product be a Success or a Flop ?",3000,"Are My employee Happy At work ?",3000,"Do people like attending my events ?"]}
        loop={Infinity}
        wrapper="p"
       
      />
      </Heading>
</Center>
<Center p={2} >
      <h1>A global leader in survey software. 20 million questions answered daily.</h1>
</Center>
<Center><Button h={"50px"} w={"11%"} mt={10} colorScheme={'orange'}>Get Started</Button></Center>
</Box>
<Center mt={10}>
<Box w={"70%"} bg={"blackAlpha.200"} opacity={"100%"} p={10}>
<Center>
 <Text fontSize={"xl"} >Who is your Survey Audience?</Text>
 </Center>
 <Center>
 <SimpleGrid columns={4} mt={10} spacing={20}>
  <Box bg={"white"} w={40} h={10} borderRadius={5}> <Center><Text mt={1.5}>Employees</Text></Center> </Box>
  <Box bg={'white'}  w={40} h={10} borderRadius={5}>  <Center><Text mt={1.5}>Customers</Text></Center> </Box>
  <Box bg={"white"}  w={40} h={10} borderRadius={5} > <Center><Text mt={1.5}>  Target Markets </Text></Center> </Box>
  <Box bg={"white"}  w={40} h={10}  borderRadius={5}>  <Center> <Text mt={1.5}> Others</Text></Center></Box>
 </SimpleGrid>
 </Center>

</Box>
</Center>

<Box>
  <Center>
    <Grid
  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(10, 1fr)'
  gap={4}
w="75%"
>
  <GridItem rowSpan={2} colSpan={4} ><Image src={image2} w={'100%'} h={"400px"}/></GridItem>
  <GridItem colSpan={3}  ><Image src={image3} w={'100%'}/></GridItem>
  <GridItem colSpan={3}  ><Image src={image4} w={'100%'}/></GridItem>
  <GridItem colSpan={3}  ><Image src={image5} w={'100%'}/></GridItem>
   <GridItem colSpan={3}  ><Image src={image6} w={'100%'}/></GridItem>
 
</Grid>
  </Center>
</Box>
<Box mt={10}><Center><Text fontSize={"xl"}>Join more than 17 million active users worldwide</Text></Center></Box>


<Box mt={10}>
<Center>
      <SimpleGrid columns={[1,2,3,4,5]} spacing={10} w={"80%"}>
        <Image src="https://prod.smassets.net/assets/content/sm/Allbirds-slate.png"/>
        <Image src="https://prod.smassets.net/assets/content/sm/Tweezerman-logo-2x.png"  />
        <Image src="https://prod.smassets.net/assets/content/sm/Adobe-logo-2x.png"/>
        <Image src="https://prod.smassets.net/assets/content/sm/Verizon-logo-2x.png" />
        <Image src="https://prod.smassets.net/assets/content/sm/sephora-logo.png" />
      </SimpleGrid>
      </Center>
    </Box>

    <Box>
    <Center>
    <SimpleGrid w={"80%"} columns={[1,2,3]} gap={10}>
<Box border={"1px solid red"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}> 
<Box  bg={"orange"} w={"100% "}  h={"50px"}>Basic</Box>
<Center mt={5}>
<Image src={image7} w={"100px"} h={"70px"}/>

</Center>
<Center>
<Text mt={5}>Always Free</Text></Center>
<Center mt={5}><Button colorScheme={'orange'} >Signup</Button></Center>
<Center mt={5} ml={10}>
<Text fontSize={'xs'} >Send unlimited surveys with up to 10 questions. Response limits apply.</Text>
</Center>
</Box>
<Box  >
  <Box  bg={"#06508f"} w={"100% "}>Individual Advantage</Box>

</Box>
<Box >
  <Box  bg={"pink"} w={"100% "}>Team Advantage</Box>
  <Text>₹</Text>
</Box>

</SimpleGrid>
</Center>
    </Box>
    </div>
    
  )
}

export default Home
