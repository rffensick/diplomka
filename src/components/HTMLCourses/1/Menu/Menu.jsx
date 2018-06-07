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
        <li>
          <Link to={`${url}/run/5`}>Описание содержания страницы</Link>
        </li>
        <li>
          <Link to={`${url}/run/6`}>HTML-комментарии</Link>
        </li>
        <li>
          <Link to={`${url}/run/7`}>Подключение стилей</Link>
        </li>
        <li>
          <Link to={`${url}/run/8`}>Тайна CSS-редактора</Link>
        </li>
        <li>
          <Link to={`${url}/run/9`}>Подключение внешних стилей</Link>
        </li>
        <li>
          <Link to={`${url}/run/10`}>Подключение скриптов</Link>
        </li>
        <li>
          <Link to={`${url}/run/11`}>Подключение внешних скриптов</Link>
        </li>
        <li>
          <Link to={`${url}/run/12`}>Первое итоговое задание</Link>
        </li>
        <li>
          <Link to={`${url}/run/13`}>Второе итоговое задание</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
