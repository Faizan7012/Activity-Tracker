import '../../css/pagination.css'
import {Box} from '@chakra-ui/react'
import ReactPaginate from "react-paginate";
function PAgination({totalPage,handlePage,page}){
    let n = Math.ceil(totalPage/6);
    const handlePageClick = async (data) => {
        console.log(data.selected);
    
        let currentPage = data.selected + 1;
        handlePage(currentPage)
        window.scroll({
            top:40,
            behavior:'smooth'
        })
    }
 return  <Box mb='80px'>
        <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        forcePage={page-1}
        breakLabel={"..."}
        pageCount={n}
        marginPagesDisplayed={2}
        pageRangeDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
</Box>
}

export default PAgination;