import { motion } from "framer-motion"

function LayerWelcome() {
    return (
        <div className="font-titans absolute flex flex-col -rotate-12">
            <motion.span
                initial={{ scale: 1.25, translateX: -200, opacity: 0 }}
                animate={{ scale: 1, translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-[256px] text-theme-ple text-shadow"
            >Welcome</motion.span>
            <motion.span
                initial={{ scale: 1.25, translateX: 200, opacity: 0 }}
                animate={{ scale: 1, translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="-mt-32 text-[156px]"
            >DevFlikr</motion.span>
        </div>
    )
}

export default LayerWelcome
