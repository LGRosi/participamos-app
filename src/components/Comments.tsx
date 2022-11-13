import React, { useState } from "react";

function Comments() {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  const handleClick = () => {
    setComments((comments) => [...comments, comment]);
  };

  const handleChange = (e: any) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="main-container">
        {comments.map((text) => (
          <div key={text} className="comments-container">
            {text}
          </div>
        ))}

        <div className="comments-box-container">
          <h1 className="comment-title">Comentarios</h1>
          <textarea
            className="comment-textarea"
            onChange={handleChange}
            value={comment}
          ></textarea>
          <button
            type="button"
            className="comment-button"
            onClick={handleClick}
          >
            Publicar
          </button>
        </div>
      </div>
    </>
  );
}

export default Comments;
