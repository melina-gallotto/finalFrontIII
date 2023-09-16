import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/Context/global.context'
import { Loader } from '../Components/Loader/Loader'


export const Home = () => {

  const { state } = useContext(ContextGlobal)
  const { data, loading } = state

  return (
    <main className="home" >
      <h1 className='home-title'>DH Odontología</h1>
      <div className='card-grid'>
        {
          loading
            ? <Loader />
            : data.map(elem => <Card key={elem.id} props={elem}/>)
        }
      </div>
    </main>

  )
}

export default Home;