import React from 'react';

const AddCoffee = () => {

    

    return (
        <div className='bg-[#F4F3F0]'>
            <h2 className='text-2xl font-bold pt-5 text-center'>Add New Coffee </h2>
            <form className='p-12'>
                <div>
                    {/* name and chef */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder='Enter coffee name' className="input input-bordered  rounded-md w-full" />
                        </div>

                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder='Enter chef name' className="input input-bordered rounded-md w-full" />
                        </div>
                    </div>
                    {/* supplier and test */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder='Enter supplier name' className="input input-bordered rounded-md w-full" />
                        </div>

                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input type="text" name="test" placeholder='Enter test name' className="input input-bordered rounded-md w-full" />
                        </div>
                    </div>
                    {/* category and photo */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder='Enter category name' className="input input-bordered w-full rounded-md" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder='Enter photo URL' className="input input-bordered rounded-md w-full" />
                        </div>
                    </div>
                    {/* details */}
                    <div>
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea name="details" placeholder='Enter details' className="textarea textarea-bordered rounded-lg w-full"></textarea>
                    </div>

                </div>

                <input type="submit" value="Add Coffee" className="btn w-full rounded-md bg-[#D2B48C] border-black mt-4"/>
            </form>
        </div>
    );
};

export default AddCoffee;