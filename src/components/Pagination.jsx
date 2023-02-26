import { Box,Button, Center ,Flex} from '@chakra-ui/react'
import React from 'react'


 
const Pagination = ({handlepage}) => {
    let totalpage=5
    let pages=[]
    for(var i=1;i<=totalpage;i++){
pages.push(i)
    }
   
const handleClick=(page)=>{
handlepage(page)
}

  return (
    <div>
      <Box>
      <Center>
      <Flex gap={10}>
        {pages.map((item)=>(
            <Box key={item}>
            <Button mt={10} onClick={()=>handleClick(item)} colorScheme={'orange'}>{item}</Button>
            </Box>
        ))}
        </Flex>
        </Center>
      </Box>
    </div>
  )
}

export default Pagination
