import meta_description from 'assets/img/basicHTML/meta_description.png';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { Header } from 'semantic-ui-react';
import Button from '../../../UI/Buttons';
import Img from '../../../UI/Img';
import PTag from '../../../UI/PStudyText';
import RedText from '../../../UI/RedText';
import Target from '../../../UI/Target';

const style = {
  width: '100%',
  height: '500px',
  border: '0',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop: '50px',
  boxShadow: '0px 0px 36px 0px rgba(0,0,0,0.75)'
};

const SimpleHTML = () => {
  const md = '```js \n<meta name="description" content="краткое описание">```';
  return (
    <section>
      <Header as="h1">Описание содержания страницы [5/13]</Header>
      <PTag>
        Ещё один полезный для поисковых систем мета-тег — краткое описание
        страницы. Оно задаётся так:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        В атрибуте <RedText>content</RedText> должно быть краткое содержание или
        аннотация страницы. Оно часто используется поисковиками при отображении
        результатов поиска.
      </PTag>
      <PTag>
        <Img title="meta_description" src={meta_description} />
      </PTag>
      <PTag>
        Пойманный нами инженер из Яндекса не признался, важен ли этот тег для
        ранжирования, но дал ссылку{' '}
        <a href="https://yandex.ru/support/webmaster/recommendations/using-meta-desc.xml">
          на рекомендации по составлению описаний.{' '}
        </a>
        Инженера из Гугла мы ещё только выслеживаем, так что следите за
        новостями.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Измените мета-описание страницы с <RedText>Не пересказать</RedText> на
        более полезное и ёмкое:{' '}
        <RedText>
          Как поисковые системы используют мета-описание страницы.
        </RedText>
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/210pwz7jmr?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/4" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/6" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  );
};

export default SimpleHTML;
