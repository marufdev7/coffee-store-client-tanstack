import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <div className="flex flex-col items-center gap-4 my-8">
                <h1 className='text-5xl text-zinc-800 font-semibold text-center'>Hot & Cold Coffee: {coffees.length}</h1>
                <div className='flex gap-4'>
                    <button className="btn btn-active">
                        <Link to={'/add-coffee'}>Add Coffee</Link>
                    </button>
                    <button className='btn btn-active'>
                        <Link to={"/signin"}>Sign in</Link>
                    </button>
                    <button className='btn btn-active'>
                        <Link to={"/signup"}>Sign up</Link>
                    </button>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee =>
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></CoffeeCard>)
                }
            </div>
        </div>
    )
}

export default App
