import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>
        <NavLink to={`shop`}>
          Shop
        </NavLink>
        <NavLink to={`cart`}>
          Cart
        </NavLink>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
