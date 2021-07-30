import './App.css';
import React , { useState } from 'react';

import Navbar from './Navbar' ;
import Footer from './Footer';
import Input from './Input' ;
import Post from './Post';

let id = 1 ; 

function App() {
  const [posts,setPost] = useState([]) ;

  function addPost(title) {
    const newPost = { id, title};
    setPost([newPost, ...posts]);
    id +=1;
  }

  function deletePost(id){
      const updatedPost = posts.filter((post) => post.id !== id);
      setPost(updatedPost); 
  }

  return (
    <div>
      <Navbar />  
      <Input addPost={addPost}/>
      {posts.map( (post) =><Post key = {post.id} id={post.id} title = {post.title} deletePost={deletePost} /> ) }
      <Footer />
    </div>
  );
}

export default App;
