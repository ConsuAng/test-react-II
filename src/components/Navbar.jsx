import slice from '../assets/pizza-slice2-24px.png';
import shop from '../assets/shopping-cart2-24px.png';
import { useContext } from "react";
import Context from "../context/Context";
import {useNavigate} from 'react-router-dom';


export default function Navbar() {
  const { total } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="bg-sky-400 text-white flex items-center justify-center">
      <div className="p-3 w-full flex justify-between lg:max-w-screen-xl">
        <div className='flex justify-center items-center' onClick={() => navigate('/')}>
          <img src={slice} className="pr-2" />
          <p> Pizzería Mamma Mia!</p>
        </div>
        <div className='flex justify-center items-center' onClick={() => navigate('/carrito')}>
          <img src={shop} className="pr-2" />
          <p>$ {total}</p>
        </div>
      </div>
    </div>
  )
}