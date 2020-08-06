import React,{useState} from 'react';
import Qualification  from '../components/Qualification';
import Layout from '../components/layout'

const qualification = () => {
    const [pizza, setPizza] = useState({ base: "", toppings: [] });
    const addBase = (base) => {
        setPizza({ ...pizza, base })
      }
       return (
        <Layout>
            <Qualification addBase={addBase} pizza={pizza} />
        </Layout>
    )
}

export default qualification

