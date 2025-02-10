// Comment.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentInitiative } from '../Reducers/InitiativeSlice'; // adjust the import path as needed
import axios from 'axios';

const Comment = ({ initiativeId }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [toggle, setToggle] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:3000/api/initiatives/comment/${initiativeId}`
            );
            setComments(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        if (initiativeId) {
            fetchComments();
        }
    }, [initiativeId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || !user._id) {
            console.error("User not logged in");
            return;
        }
        try {
            dispatch(
                commentInitiative({
                    initiativeId,
                    userId: user._id,
                    comment: newComment,
                })
            );

            // const AddComment = result.payload.comment;
            // setComments((prev) => [...prev, AddComment]);
            fetchComments();
            setNewComment('');
            setToggle(false);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <div className="bg-white shadow rounded-lg flex flex-col w-full">
            <button
                onClick={() => setToggle(!toggle)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none transition-colors"
            >
                {toggle ? 'Cancel' : 'Add Comment'}
            </button>

            {toggle && (
                <div className="mt-4">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write your comment here..."
                            rows="1"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                        <button
                            type="submit"
                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none transition-colors"
                        >
                            Submit Comment
                        </button>
                    </form>
                </div>
            )}

            <div className="mt-6">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={comment._id || index} className="border-b border-gray-200 py-2">
                            <p className="text-gray-800">{comment.comment}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(comment.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default Comment;
