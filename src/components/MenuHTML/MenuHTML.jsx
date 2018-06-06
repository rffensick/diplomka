import React from 'react';
import { Link } from 'react-router-dom';

const MenuHTML = props => {
  const {
    match: { url }
  } = props;
  return (
    <nav>
      <li>
        <Link to={`${url}/1`}>Структура HTML-документа</Link>
      </li>
      <li>
        <Link to={`${url}/2`}>Разметка текста</Link>
      </li>
      <li>
        <Link to={`${url}/3`}>Ссылки и изображения</Link>
      </li>
      <li>
        <Link to={`${url}/4`}>Знакомство с таблицами</Link>
      </li>
      <li>
        <Link to={`${url}/5`}>Знакомство с формами</Link>
      </li>
    </nav>
  );
};

export default MenuHTML;
