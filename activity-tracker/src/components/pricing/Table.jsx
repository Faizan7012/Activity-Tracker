import {Image,Flex,Box, Heading} from '@chakra-ui/react';

function TablePrice({p1,p2,p3,p4,p5}){

return  <Box w='100%'>


        <Flex justifyContent='space-between'>

         <Box w='30%'>
 
            <Heading textAlign='left' fontSize={['12px','15px','15px']}>{p1}</Heading>

          </Box>


          <Box w='60%' mb='20px'>

            <Flex w='95%' justifyContent='space-between' alignItems='center'>
<Flex w='100px' justifyContent='center'>      
<Heading fontSize={['10px','12px','15px']}>
{
 p2=='ok'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--true.svg' />:
 p2=='no'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--false.svg' />:p2
}
</Heading>
</Flex>

<Flex w='100px' justifyContent='center'>        
<Heading fontSize={['10px','12px','15px']}>

{
 p3=='ok'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--true.svg' />:
 p3=='no'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--false.svg' />:p3
}
</Heading>
</Flex>


<Flex w='100px' justifyContent='center'>        
<Heading fontSize={['10px','12px','15px']}>

{
 p4=='ok'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--true.svg' />:
 p4=='no'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--false.svg' />:p4
}
</Heading>
</Flex>


<Flex w='100px' justifyContent='center'>        
<Heading fontSize={['10px','12px','15px']}>

{
 p5=='ok'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--true.svg' />:
 p5=='no'?<Image src='https://about.codecov.io/wp-content/themes/codecov/assets/icons/pricing-icons/value--false.svg' />:p5
}
</Heading>
</Flex>





            </Flex>
           
          </Box>

        </Flex>
         

        </Box>




}

export default TablePrice;