"use client"
import { useAppSelector } from '@/store'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'

const WidgetsGrid = () => {
    const isCart = useAppSelector(state =>state.counter.value)
  return (
    <div className='flex flex-wrap p-2'>
        <SimpleWidget 
        subTitle="Productos agregados al carrito"
        title={`${isCart}`}
        label="contador"
        icon={<IoCartOutline size={70} className='text-blue-600'/>}
        href='/dashboard/counter'
        />
   {/*      <SimpleWidget/> */}
    

      </div>
  )
}

export default WidgetsGrid