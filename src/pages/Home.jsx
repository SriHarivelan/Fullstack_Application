import React, { useState } from 'react';
import { Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alogo from "../assets/images/Alogo.jpg"; // Import your logo image
import '../assets/css/HomeScreen.css';

const HomeScreen = () => {
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate('/pro');
    };

    const handleEligibility = () => {
        navigate("/eli");
    };

    const handleAbout = () => {
        navigate("/abt");
    };

    const handleHome = () => {
        navigate('/land');
    };

    return (
        <div style={{ overflow: 'hidden' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Toolbar style={{
                background: '#00C9FF',
                background: '-webkit-linear-gradient(to right, #92FE9D, #00C9FF)',
                background: 'linear-gradient(to right, #92FE9D, #00C9FF)',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0 20px', // Adjust padding as needed
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Alogo} alt="Logo" style={{ height: 50, marginRight: 10 }} />
                    {/* You can add Typography for the app name if needed */}
                </div>
                <div>
                <Button color="inherit" onClick={handleHome} style={{ color: 'black', marginRight: '10px' }}>Home</Button>
                <Button color="inherit" onClick={handleAbout} style={{ color: 'black', marginRight: '10px' }}>About</Button>
                <Button color="inherit" onClick={handleEligibility} style={{ color: 'black', marginRight: '10px' }}>Eligibility</Button>
                <Button color="inherit" onClick={handleProfile} style={{ color: 'black' }}>Profile</Button>
                </div>
            </Toolbar>

            <div className='hero'></div>
        </div>
        </div>
    );
};

export default HomeScreen;
