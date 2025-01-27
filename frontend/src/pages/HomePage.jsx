import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToSchemes = () => {
        navigate('/schemes');
    };

    const navigateToReportIssue = () => {
        navigate('/report');
    };

    return (
        <>
            <Navbar />

        </>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

export default HomePage;
