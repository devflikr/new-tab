import { motion } from "framer-motion"
import useQuickAccess, { QuickAccessLink } from "../hooks/useQuickAccess"
import Favicon from "../tokens/Favicon"
import Popup from "../context/Popup"
import { useState } from "react";
import usePopup from "../context/Popup/usePopup";
import { useDebounce } from "react-unique-hooks";
import Form from "../tokens/Form";
import Button from "../tokens/Button";

function LayerQuickAccess() {
    const { openPopup } = usePopup();
    const { list, pushLink } = useQuickAccess();

    return (
        <>

            <div className="flex-1 relative z-10 items-end">
                <motion.div
                    style={{ transformOrigin: "left bottom" }}
                    initial={{ rotateY: -90, rotateZ: -15, height: 0, opacity: 0.5 }}
                    animate={{ rotateY: 0, rotateZ: 0, height: "100%", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full bg-theme-blk rounded-[32px] overflow-hidden flex py-5 flex-col gap-5"
                >
                    <div className="flex flex-nowrap all-center gap-5">
                        <div className="text-center text-theme-blg font-bold text-sm">Quick Access</div>
                        <span className="text-2xl w-6 h-6 aspect-square rounded-md hover:bg-theme-hvr inline-flex all-center cursor-pointer" onClick={() => openPopup("add-quick-access")}>+</span>
                    </div>
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ overflow: "hidden" }}
                            animate={{ overflow: "auto" }}
                            transition={{ delay: 1 }}
                            className="absolute inset-0 overflow-auto no-scrollbar space-y-1 px-5"
                        >
                            {list.map(link => <div
                                title={link.link}
                                key={link.id}
                                className="bg-theme-slt rounded first-of-type:rounded-t-xl last-of-type:rounded-b-xl cursor-pointer hover:bg-theme-hvr transition-all flex items-center gap-3 overflow-hidden p-2"
                                onClick={() => (window.location.href = link.link)}
                            >
                                <Favicon size={24} url={link.link} />
                                {link.name}
                            </div>)}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Popup id="add-quick-access" title="Add Site" className="w-[480px]">
                <QuickPopup add={pushLink} id="add-quick-access" />
            </Popup>
        </>
    )
}

export default LayerQuickAccess


export type QuickPopupProps = {
    add: (element: QuickAccessLink) => void;
    id: string;
}

function QuickPopup({ add, id }: QuickPopupProps) {
    const [addFav, setAddFav] = useState<QuickAccessLink>({ id: -99, name: "", link: "" });

    const [favLink, setFavLink] = useState<string | null>(null);

    const { closePopup } = usePopup();

    useDebounce(() => {
        setFavLink(addFav.link || null);
    }, 500, [addFav.link]);

    return (
        <Form<QuickAccessLink> onUpdate={(fav) => setAddFav(fav)} onPost={(fav) => { add(fav); closePopup(id); }}>
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