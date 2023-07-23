import { Channel } from "./channels.interfaces";

export interface ModalCreateChannelsProps {
    closeModal: (value: boolean) => void;
    addChannelToList: (newChannel: Channel) => void;
}
