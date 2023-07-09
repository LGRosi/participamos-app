import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import io from "socket.io-client";
import SentMessageBox from "./SentMessageBox";
import { Comment } from "../interfaces/comment.interfaces";

const socket = io("/");

function Comments() {
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>([]);

    const handleSubmit = async (eventSubmit: React.ChangeEvent<HTMLFormElement>) => {
        eventSubmit.preventDefault();

        const newComment: Comment = {
            bodyMessage: comment,
            from: "Yo",
        };

        //TODO: Llevar esta lógica a un servicio.
        // Realiza la solicitud POST al backend para guardar el mensaje
        try {
            await fetch("http://localhost:4000/api/messages", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });

        } catch (error) {
            console.error("Error al guardar el mensaje:", error);
        }

        setComments([...comments, newComment]);
        socket.emit("message", comment);

        setComment("");
    };

    const handleChange = (eventComment: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(eventComment.target.value);
    };

    const receiveMessage = (message: Comment) => {
        setComments((state) => [...state, message ]);
    };

    useEffect(() => {
        socket.on("message", receiveMessage);

        return () => {
            socket.off("message", receiveMessage);
        };
    }, []);

    return (
        <div className="main-comments-container">
            <div className="message-container">
                {
                    comments.map((comment: Comment, index: number) => (
                        <SentMessageBox
                            key={index}
                            bodyMessage={comment.bodyMessage}
                            from={comment.from}
                        />
                    ))
                }
            </div>

            <form onSubmit={handleSubmit} className="comments-box-container">
                <textarea
                    onChange={handleChange}
                    value={comment}
                    autoComplete="off"
                    placeholder="Enviar un mensaje a la comunidad"
                    className="comment-textarea"
                ></textarea>

                <button className="comment-button">
                    <BiSend color="#FFFFFF" size={16} />
                </button>
            </form>
        </div>
    );
}

export default Comments;