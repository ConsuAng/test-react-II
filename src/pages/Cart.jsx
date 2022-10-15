import { useContext } from "react"
import Context from '../context/Context'
import Container from "../layout/Container";

export default function Cart() {
  const { cart, total } = useContext(Context);

  return (
    <Container>
      {cart.length > 0 ?
        <div className="bg-gray-100 py-8">
          <h1 className="text-lg ml-3">Detalles del pedido:</h1>
          <div className="bg-white m-3">
            {
              cart?.map((pizza, i) => (
                <div key={i} className='flex  items-center p-3'>
                  <div className="flex items-center">
                    <img src={pizza.img} className='w-1/4' />
                    <p className="pl-2">{pizza.name}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="pr-3">${pizza.count * pizza.price}</p>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">-</button>
                    <p className="px-2">{pizza.count}</p>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">+</button>
                  </div>
                </div>
              ))
            }
            <p className="pb-2 text-xl ml-3">Total:$ {total}</p>
            <button className="bg-green-600 text-white rounded px-3 py-1 text-sm ml-3 mb-3">Ir a Pagar</button>
          </div>
        </div>
        :
        <div>Carrito de compras vacio</div>
      }
    </Container>
  )
}