import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const newCoffee = { name, chef, supplier, test, category, photo, details };
        // console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // cosole.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0]'>
            <h2 className='text-2xl font-bold pt-5 text-center'>Add New Coffee </h2>
            <form onSubmit={handleAddCoffee}>
                <div className='m-12'>
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

                    <input type="submit" value="Add Coffee" className="btn w-full rounded-md bg-[#D2B48C] border-black mt-5 mb-7" />
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;