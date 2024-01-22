export type PopupContext = {
    popups: PopupContextValue;
    openPopup: (popupId: string) => void;
    closePopup: (popupId: string) => void;
    togglePopup: (popupId: string, value: PopupContextArgument) => void;
}

export type PopupContextValue = {
    [key: string]: boolean;
}

export type PopupContextArgument = boolean | ((value: boolean) => boolean);