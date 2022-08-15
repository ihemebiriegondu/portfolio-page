import React from 'react';
import { Button } from "react-bootstrap";
import HeaderImg from '../assests/HeaderImg.jpg';
import SocialIcons from '../components/SocialIcons';

import { HiOutlineArrowSmDown, HiChevronDoubleDown } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom'

import '../CSS/home.css';

function Home() {
    let navigate = useNavigate();
    return (
        <div className='col-12'>
            <SocialIcons SocialIconContainerClass={"home-social-icons-container"} />
            <div className='row col-11 ms-auto pe-5 align-items-center'>
                <div className='col-7'>
                    <div className='me-5'>
                        <h1 className='display-3 fw-bold'>Egondu Ihemebiri</h1>
                        <h2 className='display-4 fw-normal mb-4'>Frontend Developer</h2>

                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>

                        <Button variant="primary" onClick={() => { navigate("/about") }} className="py-3 px-3 fw-bold mb-0">MORE ABOUT ME <HiOutlineArrowSmDown className='fs-3' /> </Button>
                    </div>
                </div>
                <div className='col-5 header-img-div m-0 p-0'>
                    <div className='header-img-sub-div'>
                        <img src={HeaderImg} alt="header image" />
                    </div>
                </div>
            </div>
            <div className='scroll-down'>
                <HiChevronDoubleDown className='fs-2 scroll-down-icon' />
            </div>
        </div>
    )
}

export default Home