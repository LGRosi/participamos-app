import { useState } from "react";
import { BiSend } from "react-icons/bi";
import SentMessageBox from "./SentMessageBox";

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
    <div className="main-comments-container">
        <div className="message-container">
            {
                comments.map((text) => (
                    <SentMessageBox key={text} />
                    // <div key={text} className="message">
                    //     {text}
                    // </div>
                ))
            }
        </div>

        <div className="comments-box-container">
            <textarea
                autoComplete="off"
                placeholder="Enviar un mensaje a la comunidad"
                className="comment-textarea"
                onChange={handleChange}
                value={comment}
            >
            </textarea>
            <button
                type="button"
                className="comment-button"
                onClick={handleClick}
            >
                <BiSend color="#FFFFFF" size={16}/>
            </button>
        </div>
    </div>
  );
}

export default Comments;
