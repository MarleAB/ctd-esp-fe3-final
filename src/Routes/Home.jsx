import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {state} = useContextGlobal()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map(dentist =>(<div key={dentist.id}> <Card  name={dentist.name} username={dentist.username}/> </div>))}
      </div>
      <div>

      </div>
    </main>
  )
}

export default Home

