import React from "react";
import Favicon from "../tokens/Favicon";
import { useArray } from "react-unique-hooks";
import { FavoriteLink } from "../types/favorites";
import Popup from "../context/Popup";
import Form from "../tokens/Form";
import usePopup from "../context/Popup/usePopup";

const FavList = [
    { name: "Jio Centrum", link: "http://192.168.29.1" },
    { name: "Plain App", link: "https://192.168.29.145:8443/" },
    { name: "Slack", link: "https://app.slack.com/client/T8R9045CL" },
    { name: "GitHub", link: "https://github.com/shivam-ttt?tab=repositories" },
    { name: "Gmail", link: "https://mail.google.com/mail/u/0/#inbox" },
    { name: "Drive", link: "https://drive.google.com/drive/my-drive" },
    { name: "Calendar", link: "https://calendar.google.com/calendar/u/0/r" },
    { name: "Figma", link: "https://www.figma.com/file/X6SGEwQh5E1xwodxRmugpO/TTT-Academy?node-id=130%3A338&mode=dev" },
]

function FavoriteLinks(): React.JSX.Element {
    const { array: links } = useArray<FavoriteLink>(FavList);
    const { openPopup } = usePopup();

    return (
        <>
            <div className="p-3 font-semibold">Favorite Links</div>
            <div className="flex flex-col w-56 gap-1 rounded-l-xl overflow-hidden">
                {links.map(link => <FavLink key={link.link} {...link} />)}
                <FavLink key="add-favorites" name="Add" link="" src="/assets/plus.png" onClick={() => openPopup("add-favorites")} />
            </div>
            <Popup id="add-favorites" title="Add Site" className="w-[480px]">
                <Form>
                    <fieldset>
                        <label htmlFor="add-favorites-name">Title</label>
                        <input type="text" name="name" id="add-favorites-name" placeholder="Website title" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="add-favorites-link">URL</label>
                        <input type="url" name="link" id="add-favorites-link" placeholder="Website link" required />
                    </fieldset>
                </Form>
            </Popup>
        </>
    )
}

export default FavoriteLinks

export type FavLinkProps = FavoriteLink & {
    src?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function FavLink({ onClick, link, name, src }: FavLinkProps) {
    return (
        <div className="flex items-center bg-theme-btn transition-all hover:bg-theme-hvr rounded-l p-2 gap-4 cursor-pointer text-inherit" onClick={onClick}>
            <Favicon size={32} url={link} src={src} />
            <span className="inline-block w-40">
                <span className="block text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
                <span className="block text-ellipsis overflow-hidden whitespace-nowrap text-sm text-theme-txt">{link}</span>
            </span>
        </div>
    );
}