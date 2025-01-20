import React, { useState } from 'react';
import axios from 'axios';

const ReportIssue = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = () => {
        axios.post('http://localhost:5000/api/issue', { title, description, location })
            .then(() => {
                alert('Issue reported successfully!');
                setTitle('');
                setDescription('');
                setLocation('');
            })
            .catch(error => {
                console.error('Error reporting issue:', error);
                alert('Failed to report the issue.');
            });
    };

    return (
        <div style={styles.container}>
            <input
                style={styles.input}
                type="text"
                placeholder="Issue Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                style={styles.input}
                placeholder="Issue Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
            />
            <input
                style={styles.input}
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit Issue</button>
        </div>
    );
};

const styles = {
    container: { padding: '20px' },
    input: { borderWidth: '1px', padding: '10px', marginBottom: '10px', borderRadius: '5px', width: '100%' },
};

export default ReportIssue;
