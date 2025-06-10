import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    return (
        <div>
            <h2>Update a Coffee here.</h2>
        </div>
    );
};

export default UpdateCoffee;