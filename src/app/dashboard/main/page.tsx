import { SimpleWidget } from '@/pokemons/components/SimpleWidget'
import React from 'react'



export const metadata = {
 title: 'mainPage',
 description: 'Esta es la pagina principal donde se veran los cambios',
};
const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboar-main</h1>
      <span className='text-xl '>Informacion general de la aplicacion principal</span>

      <div className='flex flex-wrap p-2'>
        <SimpleWidget/>
    

      </div>
    </div>
  )
}

export default MainPage