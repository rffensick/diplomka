import React from 'react'
import { Link } from 'react-router-dom'
import { Menu as MenuUl } from '../../../UI/Menu'

const Menu = ({ match: { url } }) => {
  return (
    <nav>
      <MenuUl>
        <li>
          <i className="fas fa-code fa-2x" />
          <Link to={`${url}/run/1`}>Простейшая HTML-страница</Link>
        </li>
        <li>
          <i className="far fa-closed-captioning fa-2x" />
          <Link to={`${url}/run/2`}>Заголовок HTML-страницы</Link>
        </li>
        <li>
          <i className="fab fa-centercode fa-2x" />
          <Link to={`${url}/run/3`}>Кодировка HTML-страницы</Link>
        </li>
        <li>
          <i className="fas fa-file-word fa-2x" />
          <Link to={`${url}/run/4`}>Ключевые слова</Link>
        </li>
        <li>
          <i className="fas fa-file-alt fa-2x" />
          <Link to={`${url}/run/5`}>Описание содержания страницы</Link>
        </li>
        <li>
          <i className="fas fa-comments fa-2x" />
          <Link to={`${url}/run/6`}>HTML-комментарии</Link>
        </li>
        <li>
          <i className="fab fa-css3-alt fa-2x" />
          <Link to={`${url}/run/7`}>Подключение стилей</Link>
        </li>
        <li>
          <i className="fab fa-css3 fa-2x" />
          <Link to={`${url}/run/8`}>Тайна CSS-редактора</Link>
        </li>
        <li>
          <i className="fas fa-plug fa-2x" />
          <Link to={`${url}/run/9`}>Подключение внешних стилей</Link>
        </li>
        <li>
          <i className="fab fa-js-square fa-2x" />
          <Link to={`${url}/run/10`}>Подключение скриптов</Link>
        </li>
      </MenuUl>
    </nav>
  )
}

export default Menu
