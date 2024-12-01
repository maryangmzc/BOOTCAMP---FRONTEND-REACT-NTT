import { useEffect, useReducer, useState } from 'react'
import '../App.css'
import { Product } from '../entities/Product';
import { NavbarComponent } from '../components/navbar/NavbarComponent';
import ProductComponent from '../components/product/ProductComponent';
import cartReducer from '../reducers/Reducer';
import { ItemCart } from '../entities/ItemCart';


function Home() {
  const [state, dispatch] = useReducer(cartReducer, []);

  const [products, setProducts] = useState([] as Product[]);
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products`);

    // products , solo existe dentro de getAllProducts
    const products = await response.json();

    let elementos = products['products'].map((e: Product) => e);
    setProducts([...elementos]);
  }

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  }

  const getFiltered = () => {
    return products.filter((pro: Product) => pro
      .title.toLowerCase().includes(searchKey.toLowerCase()))
  }

  const addToCartInParent = (product: Product) => {

    dispatch({
      "type": "ADD_TO_CART",
      "payload": {
        product: product,
        qty: 1
      }
    })
  }

  useEffect(() => {
    fetchData();
    let data = localStorage.getItem("cart");
    if (data) {
      dispatch({
        "type": "INIT",
        "payload": JSON.parse(data)
      })
    }
  }, []);

  return (
    <>
      <NavbarComponent qty={state.reduce((num: number, item: ItemCart) => num + item.qty, 0)} />
      <section className='main-content '>
        <div className="search-area">
          <select name='categories'>
            <option></option>
          </select>
          <input onChange={filter} value={searchKey} name='search' />
        </div>
        <div className='container'>
          {getFiltered().map((item: Product, index: number) =>
            <ProductComponent product={item}
              key={index} callback={addToCartInParent} />)}
        </div>
      </section>
    </>
  )
}

export default Home
