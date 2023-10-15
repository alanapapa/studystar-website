import { motion } from 'framer-motion'

const TextWithLetterAnimation = ({ text }) => {
    return (
        <div className="font-sans">
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 }} // Задержка для каждой буквы
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    )
}

export default TextWithLetterAnimation
