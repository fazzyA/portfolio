import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Home from '../components/Home';
import { AnimatePresence } from 'framer-motion';
import './index.css';

const RootIndex = (props) => {
  const [click, setclick] = useState({ base: "", toppings: [] });
  const siteTitle = props.data.site.siteMetadata.title;

    return (
      <Layout location={props.location}>
          <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
          <Home />
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
