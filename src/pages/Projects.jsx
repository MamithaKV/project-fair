import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Row,Col } from 'react-bootstrap'

const Projects = () => {
  return (
    <>
    <Header/>
    <div className='container-fluid'>
      <div className='d-flex justify-content-between align-items-center py-5'>
        <h1>
          All Projects
        </h1>
        <input type="text"placeholder='search projects by their language'className='form-control w-25' />
      </div>
      <Row>
        <Col className='mb-3' sm={12} md={6} lg={4}>
        <ProjectCard/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Projects