import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    },
}

const Contact = ({ setShowModal }) => {
    useEffect(() => {
        setTimeout(() => setShowModal(true), 3000);
    }, [setShowModal]);

    return (
        <AnimatePresence>

            <motion.div className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div className="contact"
                    variants={modal}
                >
                    <p>Email: faz.pak@gmail.com</p>
                    <p>linkedIn: https://www.linkedin.com/in/faiza-aziz-76912092/</p>
                    <p>Facebook: https://www.facebook.com/faiza.aziz.188/</p>
                    <p>Github: https://github.com/fazzyA</p>
                    {/* <Link to="/" exact>
                        <button>Start Again</button>
                    </Link> */}
                </motion.div>

            </motion.div>

        </AnimatePresence>
    )
}

export default Contact;