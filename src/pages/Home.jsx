
import Typical from 'react-typical'
import { Button, Center, Heading,Box ,Text, SimpleGrid, Grid,Image, GridItem} from '@chakra-ui/react'
import React from 'react'
import image2 from "../image/1st.png"
import image3 from "../image/@nd.png"
import image4 from "../image/3rd.png"
import image5 from "../image/4th.png"
import image6 from "../image/5th.png"
import image7 from "../image/Crown.jpg"
import image8 from "../image/7th.png"
import Footer from '../components/Footer'
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
    <Box mt={10}><Center><Text fontSize={"3xl"}>Choose a plan that works for you</Text></Center></Box>
    <Box mt={10}><Center><Text fontSize={"xl"}>Get an individual plan with features that you need, or create a team instead!</Text></Center></Box>

    <Box mt={20}>
    <Center>
    <SimpleGrid w={"80%"} columns={[1,2,3]} gap={10}>
<Box border={"1px solid orange"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}> 
<Box  bg={"orange"} w={"100% "}  h={"50px"}>
<Center><Text color={"white"} p={2} fontSize={'xl'}>
Basic</Text></Center>
</Box>
<Center mt={5}>
<Image src={image7} w={"100px"} h={"70px"}/>

</Center>
<Center>
<Text mt={5}>Always Free</Text></Center>
<Center mt={5}><Button colorScheme={'orange'} >Signup</Button></Center>
<Center mt={7} ml={12} mb={10}>
<Text fontSize={'sm'} fontFamily={`FONT-FAMILY
"National 2", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans", "Hiragino Kaku Gothic Pro", 游ゴシック, 游ゴシック体, YuGothic, "Yu Gothic", "ＭＳ ゴシック", "MS Gothic", sans-serif`} >Send unlimited surveys with up to 10 questions. Response limits apply.</Text>
</Center>
</Box>
<Box border={"1px solid #06508f"} > 
  <Box  bg={"#06508f"} w={"100% "}  h={"50px"}><Center><Text color={"white"} p={2} fontSize={'xl'}>
Individual Advantage</Text></Center></Box>
  <Center mt={5}>
    <Text fontSize={"4xl"}>₹ 1999</Text>
  </Center>
  <Center>/month</Center>
  <Center mt={4}><Text fontSize={"sm"} >Billed ₹23,988 annually</Text></Center>
  <Center mt={5}><Button color={"white"} bg={"#06508f"}>See All features</Button></Center>
  <Center mt={7} ml={12} mb={10}><Text noOfLines={3}  fontSize={'sm'}>Get our most popular features for creating, sending & analyzing surveys.</Text></Center>
</Box>
<Box border={"1px solid #53225b"} >
  <Box bg={"#53225b"} w={"100% "}><Center><Text color={"white"} p={2} fontSize={'xl'}>
Team Advantage</Text></Center></Box>
<Center mt={5}>
    <Text fontSize={"4xl"}>₹ 1550</Text>
  </Center>
  <Center>per user /month</Center>
  <Center mt={4}><Text fontSize={"sm"} >Starting at 3 users, billed annually</Text></Center>
  <Center mt={5}><Button color={"white"} bg={"#53225b"}>See All features</Button></Center>
  <Center mt={7} ml={12} mb={10}><Text noOfLines={3}  fontSize={'sm'}>Collaboration tools and survey features that help your team work more efficiently.</Text></Center>
</Box>

</SimpleGrid>
</Center>

    </Box>
    <Box mt={20}>
<Image src={image8} w={"100%"}/>
    </Box>
    <Box mt={10}><Center><Text fontSize={"2xl"}>Start with an expert-written template</Text></Center></Box>
    
    <Box mt={10}><Center><Text textAlign="center" w={"45%"} fontSize={"md"}>Our sample survey templates make it easy for you to start collecting feedback in just minutes. Explore hundreds of questions across different survey types, all designed to get you accurate results you can rely on.</Text></Center></Box>



    <Box mt={10}><Center><Text fontSize={"2xl"}>Tools that spark business breakthroughs</Text></Center></Box>
    <Box mt={7}><Center><Text fontSize={"sm"}>Discover specialized toolkits designed for your role and industry.</Text></Center></Box>

<Center>
    <Box w={"80%"} mt={10}>
    <SimpleGrid columns={[1,2,3]} spacing={10}>
      <Box>
        <Image src="https://prod.smassets.net/assets/content/sm/customer-support-toolkit-directory.png"/>
        <Center mt={2} fontSize={"xl"}><Text>Customer support</Text></Center>
        <Center mt={2}><Text textAlign="center" w={"80%"} fontSize={"sm"}>Provide better customer experiences while keeping your teams engaged.</Text></Center>
        <Center mt={5}><Text textAlign="center" color={"orange.400"} fonsize={"md"}>Learn more</Text></Center>

      </Box>
      <Box>
        <Image   src="https://prod.smassets.net/assets/content/sm/hr-leader-toolkit-directory.png"/>
        <Center mt={2} fontSize={"xl"}><Text>Human resources</Text></Center>
        <Center mt={2}><Text textAlign="center" w={"80%"} fontSize={"sm"}>Retain your workforce by fostering a world-class employee experience.</Text></Center>
        <Center mt={5}><Text textAlign="center" color={"orange.400"} fonsize={"md"}>Learn more</Text></Center>
      </Box>
      <Box>
        <Image  src="https://prod.smassets.net/assets/content/sm/product-manager-toolkit-directory.png" />
        <Center mt={2} fontSize={"xl"}><Text>Product management</Text></Center>
        <Center mt={2}><Text textAlign="center" w={"80%"} fontSize={"sm"}>Build products that drive impact and offer a strong product-market fit.</Text></Center>
        <Center mt={5}><Text textAlign="center" color={"orange.400"} fonsize={"md"}>Learn more</Text></Center>
      </Box>
      </SimpleGrid>
    </Box>
</Center>
<Box mt={10}> <Center><Text fontSize={"2xl"}>More toolkits for industry leaders</Text></Center></Box>
<Center>
<SimpleGrid color={"orange.400"} mt={10} w={"80%"} columns={[1,2,3]} spacing={5}>
  <Center><Text fontSize={"sm"}>Demand generation manager</Text></Center>
  <Center><Text fontSize={'sm'}>Diversity, equity & inclusion</Text></Center>
  <Center><Text fontSize={'sm'}>Product marketer</Text></Center>
  <Center><Text fontSize={'sm'}>Brand marketer</Text></Center>
  <Center><Text fontSize={'sm'}>User researcher</Text></Center>
  <Center><Text fontSize={'sm'}>CRM admin</Text></Center>
</SimpleGrid>
</Center>
<Center mt={10}><Button bg={"white"} border={"1px solid black"}>View All</Button></Center>
<Box bg={"blackAlpha.200"} mt={20}>
  <Center p={10}><Text textAlign="center" w={"45%"} fontSize={"2xl"}>Go beyond collecting feedback—deliver better experiences that drive your business</Text></Center>
 <Center>
  <SimpleGrid columns={[1,2]} w={"70%"} pb={50} spacing={10}>
  <Box>
  <Center><Image src="https://prod.smassets.net/assets/content/sm/Momentive-Symbol-RGB-1-1.png"/></Center>
    <Center mt={5}><Text fontSize={"3xl"}>Momentive Solutions </Text></Center>
    <Center mt={5}><Text textAlign="center" w={"60%"} fontSize={"xs"}>Get a platform that can grow and change along with your survey needs over time. Browse our plans to learn more about specific features.</Text></Center>
    <Center mt={7} ><Button bg={'white'} border={"1px solid black"}  fontSize={"xs"}>Visit Momentive</Button></Center>
 </Box>
 <Box>
  <Center><Image src="https://prod.smassets.net/assets/content/sm/gfp-logo-rgb-2x-1.png"/></Center>
    <Center mt={5}><Text fontSize={"3xl"}>GetFeedback </Text></Center>
    <Center mt={5}><Text textAlign="center" w={"60%"} fontSize={"xs"}>Manage your company’s data with advanced security and control, so you can enable your teams to share and collaborate safely.</Text></Center>
    <Center mt={7} ><Button bg={'white'} border={"1px solid black"} fontSize={"xs"}>Visit GetFeedback</Button></Center>
 </Box>
 </SimpleGrid>
 </Center>
</Box>

<Box mt={20}><Center ><Text fontSize={"3xl"}>Still curious?</Text></Center></Box>
<Box mt={10}><Center ><Text fontSize={"lg"}>Explore these additional resources to help you launch successful survey projects.</Text></Center></Box>
<Center>
  <SimpleGrid mt={20} columns={[1,2,3]} w={"75%"} spacing={20}>
    <Box>
      <Center><Image src="https://prod.smassets.net/assets/content/sm/golden-state-warriors.png"/></Center>
      <Center><Text mt={5}>Success Stories</Text></Center>
      <Center><Text mt={5} textAlign="center" >Read about our customers, explore our webinars, and get guides on collecting feedback in your industry</Text></Center>
      <Center><Text mt={5} color={"orange.400"}>Explore Resources</Text></Center>
    </Box>
    <Box>
      <Center><Image src="https://prod.smassets.net/assets/content/sm/blog-tile-card.png"/></Center>
      <Center><Text mt={5}>Blog</Text></Center>
      <Center><Text mt={5} textAlign="center" >Get tips on how to create better surveys, hear the latest product news, or check out our signature research.</Text></Center>
      <Center><Text mt={5} color={"orange.400"}>See Curiosity at Work</Text></Center>
    </Box>
    <Box>
      <Center><Image src="https://prod.smassets.net/assets/content/sm/help-center-tile.png"/></Center>
      <Center><Text mt={5}>Help Center</Text></Center>
      <Center><Text mt={5} textAlign="center" >Access tutorials on how features work, learn more about billing, contact Customer Support, and more.</Text></Center>
      <Center><Text mt={5} color={"orange.400"}>Visit Help Center</Text></Center>
    </Box>
  </SimpleGrid>
</Center>


<Footer/>
    </div>
    
  )
}

export default Home
