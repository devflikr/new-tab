import React from "react";
import { PopupContext } from "../../types/popup";




const PopupContext = React.createContext<PopupContext>({
    popups: {},
    openPopup: () => { },
    closePopup: () => { },
    togglePopup: () => { },
});

export default PopupContext;