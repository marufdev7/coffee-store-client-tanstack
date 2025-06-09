import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, test, category, photo, details } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo} />
            </figure>
            <div className="flex justify-between items-center w-full">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{chef}</p>
                    <p>{supplier}</p>
                    <p>{test}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn  rounded-md">View</button>
                        <button className="btn rounded-md">Edit</button>
                        <button className="btn rounded-md">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;