// import React from 'react';
// import lodash from 'lodash';
//
// function Pagination(props) {
//     const {itemsCount,pages,currentPage} =props;
//     console.log(currentPage)
//
//     const pagesCount = Math.ceil(itemsCount/pages);
//     if (pagesCount===1)return null;
//     console.log('pages',pagesCount)
//    const items = lodash.range(1,pagesCount+1);
//
//
//     return <nav>
//         <ul className="pagination">
//             {items.map(page=>   <li key={page} className={page===currentPage?"page-item active":"page-item"}>
//                 <a onClick={()=>{props.onPageChange(page)}} href="/#"  className="page-link">{page}</a></li>)}
//
//         </ul>
//     </nav>
//
// }
//
// export default Pagination;