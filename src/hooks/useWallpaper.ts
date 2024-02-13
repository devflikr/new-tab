import imageLayer0 from "../assets/layer-bg-inner-0.jpg";
import imageLayer1 from "../assets/layer-bg-inner-1.jpg";
import imageLayer2 from "../assets/layer-bg-inner-2.jpg";
import imageLayer3 from "../assets/layer-bg-inner-3.jpg";
import imageLayer4 from "../assets/layer-bg-inner-4.jpg";
import imageLayer5 from "../assets/layer-bg-inner-5.jpg";
import imageLayer6 from "../assets/layer-bg-inner-6.jpg";
import imageLayer7 from "../assets/layer-bg-inner-7.jpg";
import imageLayer8 from "../assets/layer-bg-inner-8.jpg";
import imageLayer9 from "../assets/layer-bg-inner-9.jpg";

const layers = [
    imageLayer0,
    imageLayer1,
    imageLayer2,
    imageLayer3,
    imageLayer4,
    imageLayer5,
    imageLayer6,
    imageLayer7,
    imageLayer8,
    imageLayer9,
];

import { useMemo } from 'react'
import useStorage from "./useStorage";
import { sync_wall_paper } from "../config";
import moment from "moment";
import { useDebounce } from "react-unique-hooks";

function useWallpaper(): string {
    const [[, [index, date]], , update, loading] = useStorage<WallPaperStorage>(sync_wall_paper, [0, [6, ""]]);

    const layer = useMemo(() => layers[index], [index]);

    useDebounce(() => {
        const today = moment().format("YYYY-MM-DD-HH");
        console.log(!loading, today, date, today !== date);
        if (!loading && today !== date) {
            // update([Math.floor(Math.random() * layers.length), today]);
        }
    }, 1, [date, loading]);

    return layer;
}

export default useWallpaper


export type WallPaperStorage = [index: number, date: string];