import React,{useEffect} from 'react';
import { Link } from "gatsby"
import { motion } from 'framer-motion';
import HomeIcon from '@material-ui/icons/Home';

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

// const Contact = ({ setShowModal }) => {
    const Contact = () => {
    //     useEffect(() => {
    //     setTimeout(() => setShowModal(true), 3000);
    // }, [setShowModal]);

    return (


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
            <Link to="/">
               <button><HomeIcon color="secondary" /></button>
            </Link>
        </motion.div>

    </motion.div>


    )
}

export default Contact;