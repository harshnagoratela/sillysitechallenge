import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => (
    <Layout darkText>
            <h1
                style={{
                    color: "white",
                    textShadow: "1px 1px 2px black",
                    fontSize: "4rem"
                }}
            >
                Page Not Found !!!!
        </h1>
            <p
                style={{
                    color: "white",
                    textShadow: "1px 1px 2px black",
                    fontSize: "2rem"
                }}
            >
                Sorry we are unable to locate the page. Go to <a href="/">Homepage</a>
            </p>
    </Layout>
);

export default NotFoundPage;
