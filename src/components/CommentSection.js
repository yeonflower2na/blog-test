import React, {useState} from 'react'

const CommentSection = () => {
  /* 
    useState
    댓글 배열
    새 댓글 텍스트
    댓글 보이기, 숨기기
    수정 댓글 인덱스
    수정된 댓글 텍스트
  */
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  /* 
    함수
    댓글추가, 보이기, 숨기기, 댓글 수정, 수정된 댓글 저장, 삭제
  */
  // handle 관련된 내용
  const handdleAddComment =()=>{
    //댓글 추가
    if(newComment.trim()){
      setComments([...comments, {text:newComment, id:Date.now(),likes:0}]); //댓글 추가
      setNewComment(""); // 새 댓글 텍스트 초기화
    }
  };
  const toggleComments =()=>{
    // 댓글 보이기 숨기기
    setShowComments(!showComments);
  };
  const handleEditComment =(index)=>{
    // 댓글 수정
    setEditIndex(index); // 수정할 댓글 인덱스를 저
    setEditText(comments[index].text);
  };
  const handleSaveEdit =()=>{
    // 수정된 댓글 저장
    if(editText.trim()){ // 텍스트가 비어있지 않으면
      setComments((prevComments)=>{
        const updatedComments = [...prevComments];
        updatedComments[editIndex].text = editText;
        return updatedComments;
      }); 
      setEditIndex(null);
      setEditText('');
    }
  };
  const handleDeleteComment =(index)=>{
    const updatedComments = comments.filter((_, i)=> i !== index);
    setComments(updatedComments);
  };
  // 따봉 클릭시 함수
  const handleLikeComment = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? { ...comment, likes: comment.likes + 1 } // likes 증가
          : comment
      )
    );
  };
  return (
    <div className='commentWrap'>
      <button className='commentToggleBtn' onClick={toggleComments}>
        {showComments ? "댓글 숨기기":"댓글 보기"}
      </button>
      {showComments && (
      <div>
      <ul className='commentList'>
        {comments.map((comment, index)=>(
        <li key={comment.id}>
        <div className='commentContent'>
          {editIndex === index ? (
            // 수정 중인 댓글 입력 필드로 보여줌
          <div>
          <input type="text" 
          value={editText}
          onChange={(e)=>setEditText(e.target.value)} //수정된 텍스트 상태 업데이트
          placeholder='내용을 입력해주세요.'/>
          <button className='commentAddBtn'
          onClick={handleSaveEdit}>저장</button>
          </div>
          ):(
            <p style={{margin:"5px"}}>{comment.text}</p>
          )}
        </div>
        <div>
          <button className='likeBtn' onClick={()=>handleLikeComment(index)}>👍🏻</button>
          <span>{comment.likes}</span>
        </div>
        <div>
          <span className="editBtn" onClick={()=>handleEditComment(index)}>수정</span>
          <span className="deleteBtn" onClick={()=>handleDeleteComment(index)}>삭제</span>
        </div>

      </li>
        ))}
      </ul>
      <div className="reple">
        <input 
        type="text" 
        placeholder="내용을 입력하세요."
        value={newComment}
        onChange={(e)=>setNewComment(e.target.value)}/>
        <button className='commentAddBtn' onClick={handdleAddComment}>추가</button>
      </div>
    </div>
      )}
    </div>
  )
}

export default CommentSection