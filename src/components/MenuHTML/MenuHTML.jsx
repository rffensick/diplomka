import React from 'react';
import { Link } from 'react-router-dom';

const MenuHTML = props => {
  const {
    match: { url }
  } = props;
  return (
    <nav>
      <li>
        <Link to={`${url}/1/run/1`}>Структура HTML-документа</Link>
      </li>
      <li>
        <Link to={`${url}/2/run/1`}>Разметка текста</Link>
      </li>
      <li>
        <Link to={`${url}/3/run/1`}>Ссылки и изображения</Link>
      </li>
      <li>
        <Link to={`${url}/4/run/1`}>Знакомство с таблицами</Link>
      </li>
      <li>
        <Link to={`${url}/5/run/1`}>Знакомство с формами</Link>
      </li>
    </nav>
  );
};

export default MenuHTML;
