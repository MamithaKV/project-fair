import React ,{useState} from 'react'
import { Card ,Modal} from 'react-bootstrap'


const ProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <div className='row'>
              <div className='col-lg-6'>
                <img className='img-fluid' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" alt="" />
              </div>
              <div className='col-lg-6'>
                <h3>Title</h3>
                <h6>Languages used : <span className='text-danger'> language</span></h6>
                <p style={{textAlign:'justify'}}> <span className='fw-bolder'>projct overview : </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eveniet, ipsam excepturi recusandae, aliquam voluptatem quia impedit nisi quo ut facilis blanditiis possimus repellendus provident ea harum? Pariatur, in sed.</p>
              </div>
            </div>
            <div className='mt-2 float-start'>
              <a href="https://github.com/MamithaKV/e-cart.git"target='_blank' className='btn btn-secondary me-2'><i className='fa-brands fa-github'></i></a>
              <a href="https://e-cart-gilt.vercel.app/" target='_blank' className='btn btn-secondary'><i className='fa-solid fa-link'></i></a>
            </div>
          
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard