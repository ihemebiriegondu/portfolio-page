import React from 'react'
import { Card } from 'react-bootstrap'
import { BsEyeFill, BsGithub } from 'react-icons/bs'
import '../CSS/projectsCard.css'

const ProjectsCard = ({ProjectsCardImage, ProjectsCardName}) => {
    return (
        <Card className="shadow p-0 projectcard" style={{ height: '20rem' }}>
            <Card.Body className='p-0 projectcardbody'>
                {/*-
                <div className='cardTag rounded-pill'>
                    <p>CASE STUDY</p>
                </div>
                */}
                <div className='projectcardbodyImg'>
                    <img src={ProjectsCardImage} alt='project 1 img' />
                </div>
                <div className='cardText'>
                    <div className='cardTextDiv'>
                        <h6 className='me-4 text-uppercase'>{ProjectsCardName}</h6>
                        <div>
                            <BsEyeFill className='fs-3 me-3' />
                            <BsGithub className='fs-4' />
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectsCard