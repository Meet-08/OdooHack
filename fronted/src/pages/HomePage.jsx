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
        <div style={styles.container}>
            <button onClick={navigateToSchemes}>View Schemes</button>
            <button onClick={navigateToReportIssue}>Report an Issue</button>
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
