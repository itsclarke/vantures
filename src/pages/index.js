import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { getAllRentals } from 'lib';
import Layout from 'components/Layout';

const DynamicResult = dynamic(() => import('components/ResultCard'));

const Search = ({ data }) => {
    const [results, setResults] = useState(data);

    return (
        <Layout>
            <h1>Search Results</h1>
            {results.map(result => (
                <DynamicResult key={result._id} data={result} />
            ))}
        </Layout>
    );
}

export const getStaticProps = async context => {
    const { rentals } = await getAllRentals();
    return { props: { data: rentals } };
}

export default Search;