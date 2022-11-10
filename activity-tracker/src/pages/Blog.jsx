import { useState,useEffect } from "react";
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { getBlogsuccess,getBlogerror,getBlogloading } from "../redux/blog/action";
import SingleBlogDiv from "../components/Blog/singleBlogDiv";
import {ChakraProvider,Box} from '@chakra-ui/react';
import Navbar from "../components/Navbar";
import {useSearchParams} from 'react-router-dom';
import PAgination from "../components/Blog/pagination";
import Footer from "../components/Footer";
import FooterBlogger from "../components/Blog/footerBloggerDiv";
import Blogs from "../components/Blog/Blogs";
import TopSec from "../components/Blog/TopSection";
function getPageFromUrl(value) {
  console.log('value',value)
  if (value <= 0 || value===undefined) {
    value = 1;
  }
  value = Number(value);

  return value;
}
function Blog(){
const [searchParams, setSearchParam] = useSearchParams();
const dispatch = useDispatch();
const {blogs,loading,error} = useSelector((store)=>store.blogs);
const value2 = searchParams.get("category")
const [filterBy,setFilterBy] = useState(value2)
const value3 = getPageFromUrl(searchParams.get("page"));
const [page, setPage] = useState(value3);
const [totalPage,setTotalPage] = useState(0);
const [limit,setLimit] = useState(6)

useEffect(()=>{
  window.scroll({
    top:10,
    behavior:'smooth'
})
},[])
useEffect(()=>{
  document.title = 'Blog | Activity Tracker'
    dispatch(getBlogloading())
    if(filterBy == 'all' || filterBy=='All Categories' || filterBy==null || filterBy===undefined){
        axios.get(`https://mock-api-heroku.herokuapp.com/blog?_page=${page}&_limit=${limit}`)
        .then((res)=>{
         setTotalPage(res.headers["x-total-count"])
        dispatch(getBlogsuccess(res.data))
            })
            .catch((err)=>{
              dispatch(getBlogerror())
            })
    }
    else{
        axios.get(`https://mock-api-heroku.herokuapp.com/blog?category=${filterBy}&_page=${page}&_limit=${limit}`)
        .then((res)=>{
         setTotalPage(res.headers["x-total-count"])
          dispatch(getBlogsuccess(res.data))
            })
            .catch((err)=>{
              dispatch(getBlogerror())
            })
    }
   

    },[page,filterBy])

    useEffect(()=>{
      let paramObj = { page,limit };
      if(filterBy){
        filterBy==='All Categories'?paramObj.filterBy = 'all':paramObj.filterBy = filterBy;
      }
      setSearchParam(paramObj);
  },[page,filterBy])
    const handlePage = (val)=>{
      setPage(Number(val))
  }
   const handleFilter = (val)=>{
    setFilterBy(val)
   }
return <ChakraProvider><Box>
  
  <Navbar />
<Box w={['90%','90%','90%','80%']} m='auto' fontSize='1.25rem' lineHeight='1.5' pt='150px'>
<TopSec handleFilter={handleFilter}/>
</Box>
<Box>
{
 blogs.length!==0?<SingleBlogDiv data={blogs[5]} />:null
}
</Box>
<Blogs blogs={blogs} error={error} loading={loading}/>
<FooterBlogger />
<Box>
<PAgination totalPage={totalPage} page={page} handlePage={handlePage} />
</Box>
</Box>
<Footer />
</ChakraProvider>
}

export default Blog;