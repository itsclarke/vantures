import React, { useState } from 'react';
import { getAllRentals, getRentalData } from 'lib'
import Layout from 'components/Layout';

const Rental = ({ data }) => {
    const [result, setResult] = useState(data);
    return (
        <Layout>
            <h1>{result.name}</h1>
            <p>{result.summary}</p>
        </Layout>
    );
}

export const getStaticProps = async context => {
    const data = await getRentalData(context.params.id);
    return { props: { data } };
}

export const getStaticPaths = async () => {
    const { ids } = await getAllRentals();
    return {
        paths: ids, 
        fallback: false
    }
}

export default Rental;