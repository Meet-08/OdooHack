import React, { useState } from 'react';
import axios from 'axios';

const ReportIssue = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/issues', {
                title,
                description,
                location,
            });
            alert('Issue reported successfully!');
        } catch (err) {
            alert('Error reporting issue!');
        }
    };

    return (
        <div style={styles.container}>
            <label>Title:</label>
            <input
                style={styles.input}
                type="text"
                placeholder="Issue Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description:</label>
            <input
                style={styles.input}
                type="text"
                placeholder="Issue Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>Location:</label>
            <input
                style={styles.input}
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

const styles = {
    container: { padding: '20px' },
    input: { borderWidth: '1px', padding: '10px', marginBottom: '10px' },
};

export default ReportIssue;
