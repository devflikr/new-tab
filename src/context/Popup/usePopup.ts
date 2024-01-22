import React from "react";
import PopupContext from "./context";

export default function usePopup(): PopupContext {
    const context = React.useContext(PopupContext);
    if (!context) throw new Error("Unable to access Popup Context API.");

    return context;
}