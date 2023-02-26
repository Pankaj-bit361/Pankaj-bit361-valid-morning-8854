import { Heading ,Center, SimpleGrid,Box,Text,Flex,Button, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,} from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import {Link as Routerlink} from "react-router-dom"
const Pricing = () => {
  return (
    <div>
      <Center mt={10}> <Heading>Choose a plan that works for you</Heading></Center>
      <Center>
      <SimpleGrid mt={20} columns={3} w={"75%"} spacing={10}>
        <Box border={"1px solid #007faa"}>
          <Center><Text mt={10}  w={"80%"} fontSize={"2xl"}>TEAM ADVANTAGE</Text></Center>
          <Flex  ml={"10%"} w={"80%"} gap={5} mt={5}><Text fontSize={"3xl"}>₨ 1,550
          </Text>
          <Text mt={3}> /user/month</Text></Flex>
          <Text  ml={"10%"} w={"80%"} mt={5} fontSize={"xs"}>Starting at 3 users, billed annually</Text>

         
         <Routerlink to="/payment"> <Button color={'white'}  bg={"#007faa"} ml={"10%"} w={"80%"} mt={5} >Select</Button></Routerlink>

          <Box>
            <UnorderedList>
              <ListItem ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>Survey sharing with fine control over who can view and edit</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Gather comments all in one place</ListItem>
              <ListItem  ml={"10%"} w={"80%"}  fontSize={"sm"} mt={5}>Let team members analyze, filter, and export results</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Notify others when you get new responses</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Shared asset library for on-brand surveys</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>Add Contributor Seats</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Add or reassign accounts at any time</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Free integrations with popular collaboration apps</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> 50,000 responses per year**</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> 24/7 Expedited email support</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Quizzes with custom feedback</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Custom logo, colors, and survey URL</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Question and page skip logic</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>All data exports (CSV, PDF, PPT, SPSS, XLS)</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Accept Payments</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>   Advanced analyze features</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  SurveyMonkey industry benchmarks</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Multilingual surveys</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box border={"1px solid #671e75"}>
         <Center><Text mt={10} ml={"10%"} w={"80%"} fontSize={"2xl"}>TEAM PREMIER</Text></Center> 
          <Flex  ml={"10%"} w={"80%"} gap={5} mt={5}><Text fontSize={"3xl"}>₨ 3,800
          </Text>
          <Text mt={3}> /user/month</Text></Flex>
          <Text  ml={"10%"} w={"80%"} mt={5} fontSize={"xs"}>Starting at 3 users, billed annually</Text>

         
          <Button bg={"#671e75"} color={'white'}  ml={"10%"} w={"80%"} mt={5} >Select</Button>

          <Box>
            <UnorderedList>
              <ListItem ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>Survey sharing with fine control over who can view and edit</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Gather comments all in one place</ListItem>
              <ListItem  ml={"10%"} w={"80%"}  fontSize={"sm"} mt={5}>Let team members analyze, filter, and export results</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Notify others when you get new responses</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Shared asset library for on-brand surveys</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>Add Contributor Seats</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Add or reassign accounts at any time</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Free integrations with popular collaboration apps</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> 100,000 responses per year**</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Phone support and 24/7 email support</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Quizzes with custom feedback</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Custom logo, colors, and survey URL</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Question and page skip logic</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>All data exports (CSV, PDF, PPT, SPSS, XLS)</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Accept Payments</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>   Advanced analyze features</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  SurveyMonkey industry benchmarks</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Multilingual surveys</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box border={"1px solid #05467e"}>
          <Text mt={10} ml={"10%"} w={"80%"} fontSize={"2xl"}>TEAM ADVANTAGE</Text>
          <Text mt={8} ml={"10%"} w={"80%"} >Powerful admin tools, integrations, and collaboration features for your organization.</Text>
        

         
          <Button bg={"#05467e"} color={'white'} ml={"10%"} w={"80%"} mt={5} >Contact Sales</Button>

          <Box>
            <UnorderedList>
              <ListItem ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>Survey sharing with fine control over who can view and edit</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Gather comments all in one place</ListItem>
              <ListItem  ml={"10%"} w={"80%"}  fontSize={"sm"} mt={5}>Let team members analyze, filter, and export results</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Notify others when you get new responses</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Shared asset library for on-brand surveys</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>Add Contributor Seats</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Add or reassign accounts at any time</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Free integrations with popular collaboration apps</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Unlimited surveys and questions</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Phone support and 24/7 email support***</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Quizzes with custom feedback</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Custom logo, colors, and survey URL</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}> Question and page skip logic</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>All data exports (CSV, PDF, PPT, SPSS, XLS)</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Accept Payments</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>   Advanced analyze features</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  SurveyMonkey industry benchmarks</ListItem>
              <ListItem  ml={"10%"} w={"80%"} fontSize={"sm"} mt={5}>  Multilingual surveys</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </SimpleGrid>
      </Center>
      <Footer/>
    </div>
  )
}

export default Pricing
