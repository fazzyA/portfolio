import React, { useState } from 'react'
import { graphql } from 'gatsby'
// import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Header from '../components/Header';
import Home from '../components/Home';
import Base from '../components/Base';
import Toppings from '../components/Toppings';
import Order from '../components/Order';
import Modal from '../components/Modal';
import Contact from '../components/Contact';
import { AnimatePresence } from 'framer-motion';
import Projects from '../components/Project';
import Navbar from '../components/Navbar';

const RootIndex = (props) => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const siteTitle = props.data.site.siteMetadata.title;

    return (
      <Layout location={props.location}>
        <Navbar />
          <Header />
          <Modal showModal={showModal} />
          <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
            <Switch location={location} key={location.key}>
              <Route path="/base">
                <Base addBase={addBase} pizza={pizza} />
              </Route>
              <Route path="/order">
                <Order pizza={pizza} setShowModal={setShowModal} />
              </Route>
              <Route path="/contact">
                <Contact setShowModal={setShowModal}/>
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
      </Layout>
    )
  }

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }

  }
`
