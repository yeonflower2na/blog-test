// postData 가져오기 useParams
import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import postData from '../data/postData';

const PostDetail = () => {
  const {id} = useParams();
  const post = postData.find((p)=>p.id === parseInt(id,10));
  // 조건부 렌더링 (일치하지 않을 경우)
  if(!post){
    return(
      <div className='jonuralayout'>게시글을 찾을 수 없습니다.</div>
    )
  }
  return (
    <div className='postDetail jonuralayout'>
      <h2>{post.title}</h2>
      <p>작성자 {post.author} <span>{post.date}</span></p>
      <div className='postDetailContent'>
        <h3>본문</h3>
        <p>{post.body}</p>
      </div>
      <CommentSection />
    </div>
  )
}

export default PostDetail;