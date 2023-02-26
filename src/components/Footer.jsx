
import {Box,Center, Divider, Flex, Select, Text,Image} from "@chakra-ui/react"
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Box mt={20}><Center><Text textAlign={"center"} w={"52%"} fontSize={"xm"}>Net Promoter, Net Promoter System, Net Promoter Score, NPS and the NPS-related emoticons are registered trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.</Text></Center>
      </Box>
   
      <Flex gap={"10%"} ml={'2%'} mt={10}>
        <Text fontSize={"md"}>Community:</Text>
        <Text fontSize={"md"}>
Developers • Facebook • Twitter • Linkedin • Our Blog • Instagram • Youtube</Text>
      </Flex>
      <Flex gap={"10.2%"} ml={'2%'} mt={10}>
        <Text fontSize={"md"}>About Us:</Text>
        <Text fontSize={"md"} w={"80%"}  ml={3}>
        Leadership • TeamBoard • of • Directors • Investor • Relations • App • Directory • Newsroom • Office Locations • Imprint • Careers • Sitemap • Help • Log In • Sign Up</Text>
      </Flex> 
      <Flex gap={"10%"} ml={'2%'} mt={10}>
        <Text fontSize={"md"}>Policies:</Text>
        <Text fontSize={"md"} w={"80%"} ml={6}>

        Terms of Use • Privacy Notice • California Privacy Notice • Acceptable Uses Policy • Security Statement • GDPR Compliance • Email Opt-In • Accessibility • Cookies Notice • Cookies Preferences</Text>
      </Flex>
      <Flex gap={"12.8%"} ml={'2%'} mt={10} >
        <Text fontSize={"md"}>Use Cases:</Text> 
        <Box>
        <Text fontSize={"md"} w={"85%"} >
        Online Polls • Facebook Surveys • Survey Template • Scheduling Polls • Google Forms • vs. SurveyMonkey • Employee Satisfaction Surveys • Free Survey Templates • Mobile Surveys • How to Improve Customer Service • AB Test Significance Calculator • NPS Calculator • Questionnaire Templates • Event Survey</Text>
        <Text fontSize={"md"} mt={10} w={"82%"} >
        Sample Size Calculator • Writing Good Surveys • Likert Scale • Survey Analysis • 360 Degree Feedback • Education Surveys • Survey Questions • NPS Calculation • Customer Satisfaction Survey Questions • Agree Disagree Questions • Create a Survey</Text>
        <Text fontSize={"md"} mt={10} w={"85%"} >
       
Online Quizzes • Qualitative vs Quantitative Research • Customer Survey • Market Research Surveys • NPS Survey • Survey Design Best Practices • Margin of Error Calculator • Questionnaire • Demographic Questions • Training Survey • Offline Survey • 360 Review Template</Text></Box>
      </Flex>
   <Divider color={"black"} mt={10} w={"95"} />
<Box mt={10} ml={"4%"}>
    <Select bg={"black"} color={"white"} w={"10%"} >
        <option>English</option>
        <option>Hindi</option>
    </Select>
</Box>
<Box><Text w={"33%"} fontSize={"sm"} mt={5} ml={"4%"}>SurveyMonkey is brought to you by momentive.ai. Shape what's next with AI‑driven insights and experience management solutions built for the pace of modern business.</Text></Box>
<Flex mt={10} justifyContent={"space-between"} w={"90%"} ml={"4%"}>
    <Text>Copyright © 1999-2023 Momentive</Text>
<box>
<Image w={"150px"} src="https://www.ebridgeconnections.com/getattachment/52888c33-1092-457b-b4b9-a216d5b300f7/eBridge-Connections-BBB-accredited.aspx"/>
<Image src="" />
</box>
</Flex>
 
    </div>
  )
}

export default Footer
