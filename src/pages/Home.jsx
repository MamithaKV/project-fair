import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import projectImg from '../assets/projectImg.webp'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { homeProjectAPI } from '../services/allAPI'


const Home = () => {
  const navigate=useNavigate()
  const[homeProject,setHomeProject]= useState([])
  const[isLogin,setIsLogin]=useState(false)
console.log(homeProject);


  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
    setIsLogin(true)
    }else{
   setIsLogin(false)
    }
  },[])

const getHomeProjects = async()=>{
  try{
    const result=await homeProjectAPI()
    console.log(result);
    if(result.status==200){
      setHomeProject(result.data)
    }
    
  }catch(err){
    console.log(err);
    
  }
}


const handleNavigateToProject=()=>{
  // user is  logined?
  if(sessionStorage.getItem("token"))
  {
    navigate('/projects')

  }else{
    // not an authorised user
    alert("please login to get full access to our project collection")
  }
}

  return (
   <>
   <Header/>
      <div  style={{minHeight:'100vh'}}className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'80px'}}>  <i className='fa-brands fa-docker'></i> project Fair </h1>
              <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
          {    
            isLogin?
             <Link to={'/dashboard'} className="btn btn-warning">MANAGE YOUR PROJECTS</Link>

              :
            <Link to={'/login'} className="btn btn-warning">STARTS TO EXPLORE</Link>

            }
           </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={projectImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* explore our project */}
      <div className="my-5 text-center">
        <h1 className='mb-5'>Explore our Projects</h1>
        <marquee >
          <div className="d-flex">
            
            {
              homeProject?.map(project=>(
                <div className="me-5">
              <ProjectCard displayData={project}/>

            </div>
              ))
            }

          </div>
        </marquee>
<Link to={'/projects'}>
          <button onClick={handleNavigateToProject} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS....</button>
  
</Link>      </div>
      {/* our testimonials */}
      <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
        <h1>our testimonials</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
          {/* cardd */}
          <Card style={{ width: '18rem' }}>
      
      <Card.Body>
       
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20221231/original/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_8836451.png" alt="" />
          <div className='d-flex justify-content-center'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
         <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
       
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20221231/original/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_8836451.png" alt="" />
          <div className='d-flex justify-content-center'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
         <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
       
        <Card.Text className='d-flex justify-content-center align-items-center  flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-clipart/20221231/original/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_8836451.png" alt="" />
          <div className='d-flex justify-content-center'>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
         <p style={{textAlign:'justify'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>
  
   
        </div>
      </div>
   </>

    
  )
}

export default Home