import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../UI/Menu'

const MenuHTML = props => {
  const {
    match: { url }
  } = props
  return (
    <Menu>
      <li>
        <i className="fab fa-html5 fa-2x" />
        <Link to={`${url}/1`}>Структура HTML-документа</Link>
      </li>
      <li>
        <i className="fas fa-align-left fa-2x" />
        <Link to={`${url}/2`}>Разметка текста</Link>
      </li>
      <li>
        <i className="fas fa-link fa-2x" />
        <Link to={`${url}/3`}>Ссылки и изображения</Link>
      </li>
      <li>
        <i className="fas fa-table fa-2x" />
        <Link to={`${url}/4`}>Знакомство с таблицами</Link>
      </li>
      <li>
        <i className="fab fa-wpforms fa-2x" />
        <Link to={`${url}/5`}>Знакомство с формами</Link>
      </li>
    </Menu>
  )
}

export default MenuHTML
