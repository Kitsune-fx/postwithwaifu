import React, { useState , useEffect } from 'react' ;
import PropTypes from 'prop-types' ;
import axios from 'axios';

const baseUrl = "https://api.waifu.pics/sfw/waifu" ;

function Post( {id,title , deletePost}) {

    const [post,setPost] = useState(null);

    useEffect(()=>{
        axios.get(baseUrl).then((response) => {
            setPost(response.data)
            // console.log(response.data)
        })
    },[] );

    if(!post) return null ;

    return (
        <div className='Post'> <button className='Post__delete' onClick={() => deletePost(id)}>X</button>
            <div className = 'Post__title'>{title}</div>
            <img className ='Post__image' alt={id} src={post.url} />
        </div>
    );
}

Post.propTypes = {
    id : PropTypes.number.isRequired ,
    title : PropTypes.string.isRequired,
    deletePost : PropTypes.func.isRequired
};

export default Post ;