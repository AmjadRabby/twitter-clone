import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://boiling-mountain-91364.herokuapp.com/post')
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])
    return (
        <div>
            <h3>post</h3>
           {
               post.map(p =>  <PostCard key={p._id} postItem={p} />)
           }
        </div>
    );
};

export default Post;