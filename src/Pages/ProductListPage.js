import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GetProductList } from '../ApiRequests/ApiRequest'
import ReactPaginate from 'react-paginate';

const ProductListPage = () => {
    let [SearchKeyword ,SetSearchKeyword] =useState("0")
    let [PerPage ,SetPerPage] =useState(5)

    useEffect(()=>{
        GetProductList(1,PerPage,SearchKeyword);
    },[1,PerPage,SearchKeyword])
    let AllProductlist = useSelector((state)=>(state.product.AllProduct))
    let Total = useSelector((state)=>(state.product.Total))
    // console.log(AllProductlist)
    // console.log(Total)
    // alert(AllProductlist)
    const handlePageClick=(event)=>{
        let pageNo = event.selected
        GetProductList(pageNo+1,PerPage,SearchKeyword);
    }
    const SearchKeywordOnchange =(e)=>{
        SetSearchKeyword(e.target.value);
        if((e.target.value).length===0){
            SetSearchKeyword('0');
            GetProductList(1,PerPage,"0")
        }
    }
    const SearchData =()=>{
        GetProductList(1,PerPage,SearchKeyword)
    }
    const PerPageOnChange=(e)=>{
        SetPerPage(e.target.value);
        if((e.target.value).length===0){
            SetSearchKeyword('0');
            GetProductList(1,PerPage,"0")
        }
        GetProductList(1,PerPage,SearchKeyword)
    }


  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <h5>My Product List</h5>
                                </div>
                                <div className="col-2">
                                    <select onChange={PerPageOnChange} className="form-control mx-2 form-select-sm">
                                        <option value="5">5 Per Page</option>
                                        <option value="10">10 Per Page</option>
                                        <option value="20">20 Per Page</option>
                                        <option value="30">30 Per Page</option>
                                        <option value="50">50 Per Page</option>
                                        <option value="100">100 Per Page</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        <input onChange={SearchKeywordOnchange} type="text" className="form-control form-control-sm" placeholder=' Search . . . ' />
                                        <button onClick={SearchData} className="btn btn-outline-primary btn-sm mb-0">Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="tavle-responsive data-tavle">
                                        <table className="table">
                                            <thead className="bg-white">
                                                <tr>
                                                    <th className='text-wppercase text-secondary text-xxs font-weight-bolder'>Product</th>
                                                    <th className='text-wppercase text-secondary text-xxs font-weight-bolder'>Price</th>
                                                    <th className='text-wppercase text-secondary text-xxs font-weight-bolder'>Stock</th>
                                                    <th className='text-wppercase text-secondary text-xxs font-weight-bolder'>Code</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    AllProductlist.map((item,i)=>{
                                                            return (
                                                                <tr>
                                                                <td>
                                                                    <div className="d-flex px-2 py-1">
                                                                        <div>
                                                                            <img src={item.image} className='avatar me-3 products-image'/>
                                                                        </div>
                                                                        <div className="d-flex flex-column justify-content-center">
                                                                            <h6 className='mb-0 text-xs'>{item.title}title</h6>
                                                                            <h6 className='mb-0 text-xs text-secondary'>{item.category}</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                                                    <p className="text-xs text-secondary mb-0">{item.price}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="badge bg-info">{item.stock}</p>
                                                                </td>
                                                                <td>
                                                                    <span className="text-secondary text-xs font-weight-bold">{item.product_code}</span>
                                                                </td>
                                                            </tr>
                                                            )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12 mt-5">
                                    <nav aria-label='Page navigation example'>
                                    <ReactPaginate
                                        previousLabel="<"
                                        nextLabel=">"
                                        pageClassName='page-item'
                                        pageLinkClassName='page-link'
                                        previousClassName='page-item'
                                        previousLinkClassName='page-link'
                                        nextClassName='page-item'
                                        nextLinkClassName='page-link'
                                        breakLabel="..."
                                        breakClassName='page-item'
                                        breakLinkClassName='page-link'
                                        pageCount={Total/PerPage}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName="pagination"
                                        activeClassName='active'
                                       />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductListPage