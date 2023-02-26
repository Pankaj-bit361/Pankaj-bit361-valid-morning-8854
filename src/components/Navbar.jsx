import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    SimpleGrid
  } from '@chakra-ui/react';


import image1 from "../image/SurvkeyKing.png"
import { Link as Routerlink } from "react-router-dom"
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';


  const NAV_ITEMS = [
    {
      label: 'Products',
      children: [
        {
          label: 'SurveyKing',
          subLabel: 'Create and Send Surevy from world Leading Online Survey Software',
          href: '#',
        },
        {
          label: 'Enterprises',
          subLabel: 'Empower your Orgainisation with our secure server Platform',
          href: '#',
        },
        {
          label:"Integrate & Plus-ins",
          subLabel:"Bring survey insights into your bussiness apps"
        },
        {
          label: 'CX',
          subLabel: 'Understand & improve customer experience(NPS)',
          href: '#',
        },
        {
          label: 'Audience',
          subLabel: 'Collect survey responses from our global consumer panel',
          href: '#',
        },
        {
          label:"Engage",
          subLabel:"Understand & increase employee engagement"
        },
        {
          label:"Tech Validate",
          subLabel:"Create Marketing content from customer feedback"
        },{
          label:"Apply",
          subLabel:"Collect ,review & manage applications online"
        },{
          label:"View All",
         href:'/products'
        },
      ],
    },
    {
      label: 'Solutions',
      children: [
        {
          label: 'Customers',
          subLabel: 'Win more bussiness with Custome Powered Data',
          href: '#',
        },
        {
          label: 'Employees',
          subLabel: 'Build a stringer workforce with Employee Powered Data',
          href: '#',
        },
        {
          label: 'Markets',
          subLabel:"Validate business strategy with Market Powered Data",
          href: '#',
        },
        {
          label: 'Customer Experience',
          subLabel:"Delight customers & increase loyalty through feedback",
          href: '#',
        },
        {
          label: 'Human Resources',
          subLabel:"Improve your employee experience enagegement & retension",
          href: '#',
        },
        {
          label: 'Marketing',
          subLabel:"create winning campaigns,boost ROI & dive growth",
          href: '#',
        },
      ],
    },
    {
      label: 'Resources',
      children:[
        {
          label:"Resources",
          subLabel:"Best practices for using survey and surveyData"
        },
        {
          label:"Curiosity at Work",
subLabel:"Our blog about surveys, tips for bussiness & more"
        },
        {
          label:"Help Center",
subLabel:"Tutorials & how-to guides for using SurveyKing"
        }
      ]

      
      
    },
    {
      label: 'Plans & Pricing',
      href: '/pricing',
    },
  ];
   
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
           <Routerlink to="/"><Image   
 textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}

src={image1}
w={20} 
           /></Routerlink>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              <Routerlink to="/login">Sign In</Routerlink>
              
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'orange.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              <Routerlink to="/signup">Sign Up</Routerlink>
            
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
               
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                 
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                  <SimpleGrid columns={3}  >
                    {navItem.children.map((child) => (
                      
                      <DesktopSubNav key={child.label} {...child} />
                     
                    ))}
                    </SimpleGrid>
                  </Stack>
                </PopoverContent>
               
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
       
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box >
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text  fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }
  
  