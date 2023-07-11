import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import io from "socket.io-client";
import SentMessageBox from "./SentMessageBox";
import { Comment } from "../interfaces/comment.interfaces";
import * as commentsService from "../services/comments.services";

const socket = io("/");

function Comments() {
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAllComments = async () => {
        try {
            const allComments = await commentsService.getComments();
            setComments(allComments);

        } catch (error) {
            console.error("Error al obtener los comentarios:", error);

        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (eventSubmit: React.ChangeEvent<HTMLFormElement>) => {
        eventSubmit.preventDefault();

        const newComment: Comment = {
            bodyMessage: comment,
            from: "Yo",
            dateTime: new Date().toISOString()
        };

        try {
            await commentsService.saveComments(newComment);
            setComments([...comments, newComment]);
            socket.emit('message', comment);
            setComment('');

        } catch (error) {
            throw new Error("Error al guardar el mensaje: " + error);
        }
    };

    const handleChange = (eventComment: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(eventComment.target.value);
    };

    const receiveMessage = (message: Comment) => {
        setComments((state) => [...state, message ]);
    };

    useEffect(() => {
        fetchAllComments();
    }, []);

    useEffect(() => {
        socket.on("message", receiveMessage);
        return () => {
            socket.off("message", receiveMessage);
        };
    }, []);

    return (
        <div className="main-comments-container">
            {
                loading 
                ? (<p className="loading">Cargando comentarios...</p>) 
                : (
                    <>
                        <div className="message-container">
                            {
                                comments.map((comment: Comment, index: number) => (
                                    <SentMessageBox
                                        key={index}
                                        bodyMessage={comment.bodyMessage}
                                        from={comment.from}
                                        dateTime={comment.dateTime}
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
                    </>
                )
            }
        </div>
    );
}

export default Comments;