import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField, Button } from '@material-ui/core';
import Layout from 'components/Layout';
import { addNewVan } from 'lib';

const newRental = () => {
    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const renderMessage = response => {
        if (response && response.type.length > 0) {
            return (
                <>
                    <p>{response.type}</p>
                    <p>{response.message}</p>
                </>
            );
        } else {
            return null;
        }
    }

    return (
        <Layout>
            <h1>Submit your van</h1>
            <Formik initialValues={{ title: '', description: '' }} onSubmit={async (data, { setSubmitting }) => {
                setSubmitting(true);
                const response = await addNewVan(data)
                setSubmitting(false);
                if (response.ok) {
                    setResponse({ type: 'success', message: 'Your van has been succesfully added' });
                } else {
                    setResponse({ type: 'error', message: 'There was an issue with your request.' });
                }
            }}>
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <TextField name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
                        <br />
                        <TextField name='description' value={values.description} onChange={handleChange} onBlur={handleBlur} />
                        <br />
                        <Button disabled={isSubmitting} type='submit'>Submit</Button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
            <br />
            { renderMessage(response) }
        </Layout>
    );
}

export default newRental;