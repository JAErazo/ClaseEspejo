import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './store';
import SignIn from './users/SingIn';

let Hola = () => {
  return(<h1>hola estudiantes</h1>)
}

let NotImplement=()=>{
  return(
  <>
    <h1>Pagina no implementada</h1>
  </>
  )
}

let Error404=()=>{
  return(
  <>
    <h1>Error404</h1>
    <h2>Esta pagina no existe</h2>
    <h3>
      <Link to="/">Regresar al inicio</Link>
    </h3>
  </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Hola/>} />

          <Route path='login' element={<SignIn/>} />
          <Route path='usuarios' element={<NotImplement/>}>
            
            <Route path='add' element={<NotImplement/>} />
            <Route path='edit' element={<NotImplement/>} />
            <Route path='delete' element={<NotImplement/>} />
          </Route>

          <Route path='*' element={<Error404/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
