import empty from '../assets/empty-cart.png';

export default function () {
  return (
    <div className='flex justify-center items-center'>
      <img src={empty} className='pr-6 h-[180px] md:h-full'/>
      <p className='w-2/5 md:text-lg lg:text-2xl'>Tu carrito de compras se encuentra vacío. Presiona añadir en las pizzas que quieras llevar!</p>
    </div>
  )
}