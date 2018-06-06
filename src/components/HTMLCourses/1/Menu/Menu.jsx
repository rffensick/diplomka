import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ match: { url } }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`${url}/run/1`}>Простейшая HTML-страница</Link>
        </li>
        <li>
          <Link to={`${url}/run/2`}>Заголовок HTML-страницы</Link>
        </li>
        <li>
          <Link to={`${url}/run/3`}>Кодировка HTML-страницы</Link>
        </li>
        <li>
          <Link to={`${url}/run/4`}>Ключевые слова</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
