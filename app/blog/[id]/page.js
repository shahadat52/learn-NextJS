import React from 'react';

const Dynamic = ({ params }) => {
    const id = params.id
    return (
        <div>
            <h1>This is dynamic page {id}</h1>
        </div>
    );
};

export default Dynamic;