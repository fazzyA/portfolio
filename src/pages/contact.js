import React,{useState} from 'react'
import Contact from '../components/Contact';
import Layout from '../components/layout'
import Modal from '../components/Modal';

const contact = () => {
   // const [showModal, setShowModal] = useState(false);
    return (

        <Layout>
                    {/* <Modal showModal={showModal} /> */}

            {/* <Contact setShowModal={setShowModal} /> */}
            <Contact />
        </Layout>
    )
}

export default contact
