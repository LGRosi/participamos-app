import { Comment } from "../interfaces/comment.interfaces";

async function getComments(): Promise<Comment[]> {
    try {
        const url = "http://localhost:4000/api/messages";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(`Error en la llamada. Status: ${response.status}. Status text: ${response.statusText}`);
        }
        
    } catch (error) {
        throw new Error(`Error al traer todos los mensaje: ${error}`);
    }
}

async function saveComments(newComment: Comment) {
    try {
        const url = "http://localhost:4000/api/messages";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        });

        if (response.ok) {
            return await response.json();
        } else if (response.status === 400) {
            const error = await response.json();
            throw error;
        } else {
            throw new Error('Error en la llamada');
        }

    } catch (error) {
        throw new Error(`Error al guardar el mensaje: ${error}`);
    }
}

export {
    getComments,
    saveComments
}