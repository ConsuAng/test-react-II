import banner from '../assets/pizza-banner.webp'

export default function Banner() {
  return (
    <div className="relative h-40 w-full "  >
      <div className='brightness-50 h-full w-full bg-cover opacity-90' style={{ backgroundImage: `url(${banner})` }}></div>
      <div className="text-white flex items-center justify-center flex-col absolute inset-0">
        <p className="text-2xl md:text-3xl lg:text-4xl pb-2">¡Pizzería Mamma Mia!</p>
        <p className="text-sm md:text-base lg:text-lg">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>      
  )
}