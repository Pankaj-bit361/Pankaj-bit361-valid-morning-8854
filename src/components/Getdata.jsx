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
    axios.delete(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/survey/12`)
}

const postimage=()=>{
   let ob={
    image:image
   }
    axios.post(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/survey`,ob)
    .then((res)=>console.log(res.data))
    setimage("")
}



const datasur=[
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/customer-satisfaction-survey-template\/",
   "title": "Customer satisfaction survey",
   "itemNo": 1
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/market-research-product-survey-template\/",
   "title": "Market research – product survey",
   "itemNo": 2
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/360-degree-employee-evaluation-survey-template\/",
   "title": "360-degree employee evaluation",
   "itemNo": 3
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/brand-awareness-survey-template\/",
   "title": "Brand awareness survey",
   "itemNo": 4
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/product-testing-survey-template\/",
   "title": "Product testing survey",
   "itemNo": 5
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/employee-engagement-survey-template\/",
   "title": "Employee engagement survey",
   "itemNo": 6
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/customer-service-survey-template\/",
   "title": "Customer service",
   "itemNo": 7
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/website-feedback-survey-template\/",
   "title": "Website feedback survey template",
   "itemNo": 8
  },
  {
   "title": "Management performance",
   "itemNo": 9
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/general-event-feedback-survey-template\/",
   "title": "General event feedback survey template",
   "itemNo": 10
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/employee-satisfaction-survey-template\/",
   "title": "Employee satisfaction",
   "itemNo": 11
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/university-student-satisfaction-survey-template\/",
   "title": "University student satisfaction",
   "itemNo": 12
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/environmental-issues-survey-template\/",
   "title": "Environmental issues",
   "itemNo": 13
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/net-promoter-score-survey-template\/",
   "title": "Net Promoter® Score (NPS)",
   "itemNo": 14
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/software-evaluation-survey-template\/",
   "title": "Software evaluation survey template",
   "itemNo": 15
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/education-demographics-survey-template\/",
   "title": "Education demographics",
   "itemNo": 16
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/online-shopping-attitudes-survey-template\/",
   "title": "Online shopping attitudes",
   "itemNo": 17
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/customer-service-feedback-survey-template\/",
   "title": "Customer service feedback",
   "itemNo": 18
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/team-performance-survey-template\/",
   "title": "Team performance survey",
   "itemNo": 19
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/course-evaluation-survey-template\/",
   "title": "Course evaluation survey template",
   "itemNo": 20
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/hotel-feedback-survey-template\/",
   "title": "Hotel feedback",
   "itemNo": 21
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/rsvp-contact-information-survey-template\/",
   "title": "RSVP and contact information",
   "itemNo": 22
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/professional-event-feedback-survey-template\/",
   "title": "Professional event feedback",
   "itemNo": 23
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/employee-exit-survey-template\/",
   "title": "Employee exit",
   "itemNo": 24
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/volunteer-feedback-survey-template\/",
   "title": "Volunteer feedback survey",
   "itemNo": 25
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/employee-benefits-survey-template\/",
   "title": "Employee benefits",
   "itemNo": 26
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/post-event-feedback-survey-template\/",
   "title": "Post-event feedback survey template",
   "itemNo": 27
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/market-research-service-survey-template\/",
   "title": "Market research – service",
   "itemNo": 28
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/recruitment-satisfaction-survey-template\/",
   "title": "Recruitment satisfaction",
   "itemNo": 29
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/consumer-behavior-survey-template\/",
   "title": "Consumer behavior survey",
   "itemNo": 30
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/diet-exercise-survey-template\/",
   "title": "Diet, fitness, and exercise",
   "itemNo": 31
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/work-environment-survey-template\/",
   "title": "Work environment survey",
   "itemNo": 32
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/event-planning-survey-template\/",
   "title": "Event planning",
   "itemNo": 33
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/market-research-survey-template\/",
   "title": "Market research survey template",
   "itemNo": 34
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/department-performance-survey-template\/",
   "title": "Department performance",
   "itemNo": 35
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/skin-care-products-survey-template\/",
   "title": "Skin care products",
   "itemNo": 36
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/employee-performance-survey-template\/",
   "title": "Employee performance",
   "itemNo": 37
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/new-product-survey-template\/",
   "title": "New product template",
   "itemNo": 38
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/u-s-demographics-survey-template\/",
   "title": "U.S. demographics",
   "itemNo": 39
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/employment-survey-template\/",
   "title": "Employment template",
   "itemNo": 40
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/mental-health-survey-template\/",
   "title": "Mental health survey",
   "itemNo": 41
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/price-testing-survey-template\/",
   "title": "Price testing template",
   "itemNo": 42
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/target-market-analysis-survey-template\/",
   "title": "Target market analysis",
   "itemNo": 43
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/name-testing-survey-template\/",
   "title": "Name testing survey",
   "itemNo": 44
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/supervisor-performance-survey-template\/",
   "title": "Supervisor performance",
   "itemNo": 45
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/target-market-demographics-survey-template\/",
   "title": "Target market demographics",
   "itemNo": 46
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/typical-customer-analysis-survey-template\/",
   "title": "Typical customer analysis",
   "itemNo": 47
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/u-s-demographics-snapshot-survey-template\/",
   "title": "U.S. demographics – snapshot",
   "itemNo": 48
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/stress-survey-template\/",
   "title": "Stress survey",
   "itemNo": 49
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/u-s-political-identification-survey-template\/",
   "title": "U.S. political identification survey",
   "itemNo": 50
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/retail-customer-feedback-survey-template\/",
   "title": "Retail customer feedback",
   "itemNo": 51
  },
  {
   "scrap": "https:\/\/www.surveymonkey.com\/templates\/typical-customer-demographics-survey-template\/",
   "title": "Typical customer demographics survey template",
   "itemNo": 52
  }
  
 ]
  




const handlepatch=()=>{
// datasur.map((item)=>{
 let ob={
  "title":"Target market demographics"
 }
 axios.patch(`https://63f87b1f5b0e4a127de6dd05.mockapi.io/survey/survey/46`,ob)
// })
}

  return (
    <div>
      <button onClick={handledelete}>Deletedata</button>
<Input type="text" value={image} _placeholder="put the data" onChange={(e)=>setimage(e.target.value)} />


<Center>
     <Button  mt={10} mb={10} p={10}  onClick={postimage} >Post</Button>
     </Center>
     <Center mt={10} mb={10}><Button onClick={handlepatch}>Patch</Button></Center>
    </div>
  )
}

export default Getdata
