import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchemeList = () => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/scheme') // Update with your backend URL
            .then(response => {
                setSchemes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching schemes:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div style={styles.loader}>Loading...</div>;
    }

    return (
        <div>
            {schemes.map((item) => (
                <div key={item.id} style={styles.card}>
                    <h3 style={styles.title}>{item.name}</h3>
                    <p style={styles.description}>{item.description}</p>
                    <p style={styles.eligibility}>Eligibility: {item.eligibility || 'N/A'}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    description: {
        fontSize: '14px',
        marginBottom: '5px',
    },
    eligibility: {
        fontSize: '12px',
        fontStyle: 'italic',
    },
    loader: {
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '20px',
    },
};

export default SchemeList;
