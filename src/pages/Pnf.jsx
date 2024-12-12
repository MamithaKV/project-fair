import React from 'react'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='my-5 d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{fontSize:'80px'}}>error!!</h1>
      <img className='img-fluid' src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif" alt="" />
      <h1>Look Like you Are Lost</h1>
      <p>The Page You Are looking is not available</p>
      <Link to={'/'} className="btn btn-warning">Go To Home</Link>
    </div>
  )
}

export default Pnf