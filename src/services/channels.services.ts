import { Channel } from "../interfaces/channels.interfaces";

async function getAllChannels(): Promise<Channel[]> {
    try {
        const url = "http://localhost:4000/api/channels";
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
        throw new Error(`Error al traer todos los canales: ${error}`);
    }
}

async function saveChannel(newChannel: Channel): Promise<Channel> {
    try {
        const url = "http://localhost:4000/api/channels";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newChannel),
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
        throw new Error(`Error al guardar el canal: ${error}`);
    }
}

export {
    getAllChannels,
    saveChannel
}