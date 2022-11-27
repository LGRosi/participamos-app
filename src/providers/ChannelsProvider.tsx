import React, { useContext, useState } from "react";

const channelContext = React.createContext(null);

export function useChannelContext() {
    return useContext(channelContext);
}

export function ChannelsProvider({ children }: any) {

    const [channel, setChannel] = useState(null);

    return(
        <channelContext.Provider value={channel}>
            {children}
        </channelContext.Provider>
    ) 

}