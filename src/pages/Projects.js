import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import allgraphicsdesignpage from '../assests/Projects/all graphics design page.png'
import allslanttravelpage from '../assests/Projects/all slant travel page.png'
import allportfoliopage from '../assests/Projects/all portfolio page.png'
import calculator from '../assests/Projects/calculator.png'
import collage from '../assests/Projects/collage.png'
import collage2 from '../assests/Projects/collage2.png'


import '../CSS/projects.css'

function Projects() {
  return (
    <div className='mainProject'>
      <div className='col-12 mainProjectDiv'>
        <h3 className='text-center mt-5 text-uppercase display-5 fw-normal'>my portfolio</h3>
        <h5 className='mb-5 fs-5 text-center' style={{color: '#93f9c8'}}>Some of my recent projects</h5>
        <div className='col-11 m-auto'>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
            <div className='col'>
              <ProjectsCard ProjectsCardImage={allgraphicsdesignpage} ProjectsCardName={"Graphics designer's portfolio page"} />
            </div>
            <div className='col'>
              <ProjectsCard ProjectsCardImage={allslanttravelpage} ProjectsCardName={"Holidayz travel page"} />
            </div>
            <div className='col'>
              <ProjectsCard ProjectsCardImage={allportfoliopage} ProjectsCardName={"My portfolio page V1.0"} />
            </div>
            <div className='col'>
              <ProjectsCard ProjectsCardImage={calculator} ProjectsCardName={"My Basic calculator"} />
            </div>
            <div className='col'>
              <ProjectsCard ProjectsCardImage={collage} ProjectsCardName={"Link shortener page"} />
            </div>
            <div className='col'>
              <ProjectsCard ProjectsCardImage={collage2} ProjectsCardName={"PiggyVest website clone"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects