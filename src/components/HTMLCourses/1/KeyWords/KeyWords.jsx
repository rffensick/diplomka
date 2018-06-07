import Markdown from 'markdown-to-jsx';
import React from 'react';
import { Header } from 'semantic-ui-react';
import Button from '../../../UI/Buttons';
import CodeTag from '../../../UI/Code';
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
  const md =
    '```js \n<meta name="keywords" content="разные, ключевые, слова">```';
  return (
    <section>
      <Header as="h1">Ключевые слова [4/13]</Header>
      <PTag>
        Есть целое семейство тегов <CodeTag>meta</CodeTag>, называемых
        мета-тегами. Их можно использовать внутри тега <CodeTag>head</CodeTag>.
      </PTag>
      <PTag>
        Мета-теги различаются набором атрибутов и их значений, вот некоторые из
        атрибутов: <RedText>content</RedText>, <RedText>http-equiv</RedText>,{' '}
        <RedText>name</RedText> и <RedText>scheme</RedText>.
      </PTag>
      <PTag>
        Мета-теги хранят полезную для браузеров и поисковых систем информацию.
        Один из таких тегов — это описание ключевых слов страницы. Задаётся он
        так:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        В атрибуте <RedText>content</RedText> через запятую перечисляются самые
        важные слова из содержания страницы. Раньше этот тег был очень важен для
        поисковиков. Каково положение дел сейчас — большой секрет Яндекса и
        Гугла.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Измените ключевые слова <RedText>классы</RedText>,{' '}
        <RedText>стили</RedText>, <RedText>свойства</RedText> на более
        подходящие: <RedText>мета-теги</RedText>,{' '}
        <RedText>поисковые системы</RedText>, <RedText>ключевые слова</RedText>.{' '}
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/o5m7n2jrq?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/3" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/5" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  );
};

export default SimpleHTML;
