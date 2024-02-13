import ImageCover from "../assets/layer-bg-cover.svg?react"
import { motion } from "framer-motion"

function LayerBgCover() {
    return (
        <motion.div
            initial={{ scale: 2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
        >
            <ImageCover
                className="absolute inset-0 bg-black/30 group-hover/body:bg-black/50 transition-all"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
            />
        </motion.div>
    )
}

export default LayerBgCover
