import { useParams } from 'react-router-dom';
import { useContext } from "react";
import Context from "../context/Context";
import Container from '../layout/Container';
import slice from '../assets/pizza-slice2-24px.png';
import shop from '../assets/shopping-cart2-16px.png';


export default function Detail() {
  const { id } = useParams();
  const { pizzas } = useContext(Context);
  const index = pizzas.findIndex((x) => x.id === id);

  return (
    <Container>
      <div className='flex flex-col pt-7 px-5 h-full w-full lg:flex-row lg:max-w-screen-xl'>
        <div className="bg-cover bg-center w-full h-64 lg:w-2/5 lg:h-[397px]" style={{ backgroundImage: `url(${pizzas[index]?.img})` }}></div>
        <div className='w-full px-3 lg:w-3/5'>
          <h1 className='capitalize text-2xl py-3'>{pizzas[index]?.name}</h1>
          <hr></hr>
          <p>{pizzas[index]?.desc}</p>
          <p className='py-3'>Ingredientes:</p>
          {pizzas[index]?.ingredients.map((ingredient, i )=>(
             <p key={i} className="capitalize flex font-light text-slate-700 py-1 pl-6"><img src={slice} className='pr-2'/> {ingredient}</p>
          ))}
          <div className='flex items-center justify-between py-3'>
            <p>Precio: ${pizzas[index]?.price}</p>
            <button className='bg-red-500 text-white rounded py-2 px-2 flex items-center'>Añadir <img src={shop} className="pl-2"/></button>
          </div>
        </div>
      </div>
    </Container>


  )
}