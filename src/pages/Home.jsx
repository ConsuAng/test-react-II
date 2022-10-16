import { useContext } from "react";
import Context from "../context/Context";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  const { pizzas } = useContext(Context);

  return (
    <>
      <Banner />
      <div className="flex flex-wrap gap-5 justify-center pt-5">
        {pizzas.map((pizza, i) => (
          <Card key={i} pizza={pizza} />
        ))}
      </div>
    </> 
  )
}