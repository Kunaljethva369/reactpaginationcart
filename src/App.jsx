import { useState } from "react";
import Card from "./Components/Cards/Card";
import Pagination from "./Components/Pagination/Pagination";
import Cart from "./Components/Cart/Cart";

function App() {
  const [data, setData] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [page, setPage] = useState(1);
  const [pervious, setPervious] = useState(false);
  const [next, setNext] = useState(false);
  const [cart, setCart] = useState(0);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <Cart props={{ cart, cardDetails, setCardDetails }} />
          <Pagination props={{ data, next, setNext, pervious, setPervious, page, setPage }} />
          <Card props={{ data, setData, page, cart, setCart, cardDetails, setCardDetails }} />
        </div>
      </div>
    </>
  )
}

export default App
