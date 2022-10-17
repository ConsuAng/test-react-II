import slice from '../assets/pizza-slice2-24px.png';
import shop from '../assets/shopping-cart2-16px.png';
import eyes from '../assets/eyes-24px.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Context from "../context/Context";
import { formatPrice } from '../utils/format-price';

export default function Card({ pizza }) {
  const navigate = useNavigate();
  const { addCart } = useContext(Context);

  return (
    <div className='shadow-lg hover:-translate-y-1 hover:scale-110 duration-300'>
      <div className="bg-cover bg-center w-56 h-[150px] rounded-t" style={{ backgroundImage: `url(${pizza.img})` }}></div>
      <div className="px-4 border-x-slate-200 border border-t-transparent" >
        <h1 className="capitalize text-xl py-3 font-semibold">{pizza.name}</h1>
        <hr></hr>
        <h2 className="py-2 text-lg font-medium">Ingredientes:</h2>
        {pizza.ingredients.map((ingredient, i) => (
          <p key={i} className="capitalize flex font-light text-slate-700 py-1 pl-6"><img src={slice} className='pr-2'/> {ingredient}</p>
        ))}
      </div>
      <div className='flex items-center flex-col border-x-slate-200 border border-t-transparent rounded-b bg-white'>
        <div className='text-2xl py-5'>$ {formatPrice(pizza.price)}</div>
        <div className='w-full flex justify-around pb-4'>
          <button className='bg-cyan-400 text-white rounded py-2 px-2 flex items-center'
            onClick={()=> navigate(`/pizza/${pizza.id}`)}
          >
            Ver más <img src={eyes} className="pl-2"/>
          </button>
          <button  onClick={() => addCart(pizza.id)}
          className='bg-red-500 text-white rounded py-2 px-2 flex items-center'>Añadir <img src={shop} className="pl-2"/></button>
        </div>
      </div>
    </div>
  )
}