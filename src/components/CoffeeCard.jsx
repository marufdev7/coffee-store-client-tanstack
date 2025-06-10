import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, supplier, test, category, photo, details } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                console.log('delete confirmed');
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo} />
            </figure>
            <div className="flex justify-between items-center w-full">
                <div>
                    <h2 className="card-title">{name}</h2>
                    {/* <p>{chef}</p> */}
                    {/* <p>{supplier}</p> */}
                    <p>{test}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn  rounded-md">View</button>
                        <button className="btn rounded-md">Edit</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn rounded-md bg-red-400">
                            X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;