import React, { useState } from "react";
import PopupContext from "./context";
import { PopupContextValue } from "../../types/popup";


function PopupProvider({ children }: { children: React.ReactNode }): React.JSX.Element {

    const [popups, setPopups] = useState<PopupContextValue>({});

    const updatePopup = (id: string, value: boolean) => {
        setPopups((pops) => ({ ...pops, [id]: value }));
    }

    // const openPopup = ()

    return (
        <PopupContext.Provider value={{
            popups,
            openPopup: (id) => updatePopup(id, true),
            closePopup: (id) => updatePopup(id, false),
            togglePopup: (id, value) => updatePopup(id, (typeof value === "function" ? value(popups[id]) : value)),
        }}>
            {children}
        </PopupContext.Provider>
    );
}

export default PopupProvider;