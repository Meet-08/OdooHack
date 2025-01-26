import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToSchemes = () => {
        navigate('/schemes');
    };

    const navigateToReportIssue = () => {
        navigate('/report');
    };

    return (
        <div style={styles.container} className='bg-blue-500'>
            <button onClick={navigateToSchemes}>View Schemes</button>
            <button onClick={navigateToReportIssue}>Report an Issue</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
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
