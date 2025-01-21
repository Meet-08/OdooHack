import React from 'react';
import SchemeList from '../components/SchemeList';

const SchemePage = () => {
    return (
        <div style={styles.container}>
            <SchemeList />
        </div>
    );
};

const styles = {
    container: {
        padding: '10px',
    },
};

export default SchemePage;
