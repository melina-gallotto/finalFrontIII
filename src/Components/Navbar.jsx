import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './Context/global.context'

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ContextGlobal)


  return (
    <nav style={{ backgroundColor: theme.navBackground, color: theme.font}}>

      <div>
      <img src="/DH.ico" alt="Logo DH" />
        
        <NavLink to={"/"} style={{ color: theme.font }} className={({ isActive }) => isActive ? "active" : ""}>
          Inicio
        </NavLink>

        <NavLink to={"/contact"} style={{ color: theme.font }} className={({ isActive }) => isActive ? "active" : ""}>
          Contacto
        </NavLink>

        <NavLink to={"/favs"} style={{ color: theme.font }} className={({ isActive }) => isActive ? "active" : ""}>
          Destacados
        </NavLink>
      </div>

      <button
        onClick={() => handleChangeTheme()}
      >
        ☀️ / 🌙
      </button>

    </nav>
  )
}

export default Navbar