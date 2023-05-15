import Products from './pages/Products/Products.js';
import Basket from './pages/Basket/Basket.js';
import Product from './pages/ProductDescription/Product.js';
import Registration from './pages/Registration/Registration.js';
import Authorization from './pages/Authorization/Authorization.js';
import { Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const authorization = useSelector(state => state.users.authorization)

  return (
    <div>
      <Routes>
        {
          authorization === false
            ? <>
              <Route path='*' element={<Authorization/>}/>
              <Route path='/registration' element={<Registration/>}/>
            </>
            : <>
              <Route path='*' element={<Products/>}/>
              <Route path='/basket' element={<Basket/>}/>
              <Route path='*/:id' element={<Product/>}/>
            </>
        }
      </Routes>
  </div>
  )
}

export default App;