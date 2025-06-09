import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
    const coffees = useLoaderData();

    return (
        <div>
            <h1 className='text-5xl text-zinc-800 font-semibold text-center'>Hot & Cold Coffee: {coffees.length}</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee =>
                        <CoffeeCard key={coffee._id} coffee={coffee}>

                        </CoffeeCard>)
                }
            </div>
        </div>
    )
}

export default App
