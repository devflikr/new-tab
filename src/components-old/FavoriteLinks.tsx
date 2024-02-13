import React, { useState } from "react";
import Favicon from "../tokens/Favicon";
import { useDebounce } from "react-unique-hooks";
import { FavoriteLink } from "../types/favorites";
import Popup from "../context/Popup";
import Form from "../tokens/Form";
import usePopup from "../context/Popup/usePopup";
import useFavLinks from "../hooks/useFavLinks";
import Button from "../tokens/Button";

function FavoriteLinks(): React.JSX.Element {
    const { openPopup } = usePopup();

    const [links, pushLink] = useFavLinks();

    return (
        <>
            <div className="p-3 font-semibold">Favorite Links</div>
            <div className="flex flex-col w-56 gap-1 overflow-auto flex-1 pb-1">
                {links.map(link => <FavLink key={link.id} {...link} />)}
                <FavLink id={-1} key="add-favorites" name="Add" link="" src="/assets/plus.png" onClick={() => openPopup("add-favorites")} />
            </div>
            <Popup id="add-favorites" title="Add Site" className="w-[480px]">
                <FavLinkPopup add={pushLink} id="add-favorites" />
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
        <div className="flex items-center bg-theme-btn/50 backdrop-blur transition-all hover:bg-theme-hvr rounded-l first-of-type:rounded-tl-xl last-of-type:rounded-bl-xl p-2 gap-4 cursor-pointer text-inherit" onClick={onClick || (() => window.location.href = link)} title={name + "\n" + link}>
            <Favicon size={32} url={link} src={src} />
            <span className="inline-block w-40">
                <span className="block text-ellipsis overflow-hidden whitespace-nowrap">{name}</span>
                <span className="block text-ellipsis overflow-hidden whitespace-nowrap text-sm text-theme-txt">{link}</span>
            </span>
        </div>
    );
}

export type FavLinkPopupProps = {
    add: (element: FavoriteLink) => void;
    id: string;
}

function FavLinkPopup({ add, id }: FavLinkPopupProps) {
    const [addFav, setAddFav] = useState<FavoriteLink>({ id: -99, name: "", link: "" });

    const [favLink, setFavLink] = useState<string | null>(null);

    const { closePopup } = usePopup();

    useDebounce(() => {
        setFavLink(addFav.link || null);
    }, 500, [addFav.link]);

    return (
        <Form<FavoriteLink> onUpdate={(fav) => setAddFav(fav)} onPost={(fav) => { add(fav); closePopup(id); }}>
            <fieldset>
                <label htmlFor="add-favorites-name">Title</label>
                <input type="text" name="name" id="add-favorites-name" placeholder="Website title" autoFocus required />
            </fieldset>
            <fieldset>
                <label htmlFor="add-favorites-link">URL</label>
                <input type="url" name="link" id="add-favorites-link" placeholder="Website link" required />
            </fieldset>
            <div className="flex flex-row-reverse gap-5 mt-8 justify-between">
                <Button className="border-0" type="submit">Add</Button>
                {favLink && <Favicon size={32} url={favLink} />}
            </div>
        </Form>
    );
}