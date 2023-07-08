import { useState } from "react";
import { BiSend } from "react-icons/bi";
import io from "socket.io-client";
import SentMessageBox from "./SentMessageBox";

const socket = io("/");

function Comments() {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  const handleClick = () => {
    setComments((comments) => [...comments, comment]);
  };

  const handleChange = (eventComment: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(eventComment.target.value);
  };

  return (
    <div className="main-comments-container">
        <div className="message-container">
            {
                comments.map((text: string, index: number) => (
                    <SentMessageBox key={index} text={text} />
                ))
            }
        </div>

        <form className="comments-box-container">
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
        </form>
    </div>
  );
}

export default Comments;
