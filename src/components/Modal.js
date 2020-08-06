import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from "gatsby"
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

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal"
            variants={modal}
          >
            <p>Want to start building your website</p>
            <Link to="/contact">
              <button>Contact Me</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;