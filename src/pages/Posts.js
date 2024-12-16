import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import postData from '../data/postData';

const Posts = () => {
  let [likes, setLikes] = useState(postData.map(()=>false));
  const toggleLike = (index)=>{
    setLikes((prevLikes)=>prevLikes.map((like, i)=>(i===index ? !like : like)))
  };
  return (
    <div className='posts jonuralayout'>
      <ul>
        {postData.map((post, index)=>(
          <li key={post.id} className='postItem'>
          <div className="postCard">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="postMeta">
              <button onClick={() => toggleLike(index)}
                className={
                  likes[index] ? 'likeBtn liked' : 'likeBtn'
                }>{likes[index]?"💖 관심":"🤍 관심"}</button>
                <Link to={`/posts/${post.id}`} className='plus'>더보기</Link>
              </div>
          </div>
        </li> 
        ))}
      </ul>
    </div>
  )
}

export default Posts