import { motion } from "framer-motion"
import useWallpaper from "../hooks/useWallpaper"

function LayerBgInner() {
    const wallpaper = useWallpaper();

    return (
        <motion.div
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"

            style={{
                backgroundImage: `url(${wallpaper})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        />
    )
}

export default LayerBgInner
