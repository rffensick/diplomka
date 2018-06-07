import tab from 'assets/img/basicHTML/tab.png';
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { Header } from 'semantic-ui-react';
import Button from '../../../UI/Buttons';
import CodeTag from '../../../UI/Code';
import PTag from '../../../UI/PStudyText';
import RedText from '../../../UI/RedText';
import Target from '../../../UI/Target';
import { Img } from './Style';

const style = {
  width: '100%',
  height: '500px',
  border: '0',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop: '50px',
  boxShadow: '0px 0px 36px 0px rgba(0,0,0,0.75)'
};

const StructureHTMLDocument = () => {
  const md =
    '```js \n<head>\n\t<title>Заголовок HTML-страницы</title>\n</head>```';
  return (
    <section>
      <Header as="h1">Заголовок HTML-страницы [2/13]</Header>
      <PTag>
        Заголовок страницы — это тот текст, который отображается в левом верхнем
        углу браузера, а также во вкладках.
      </PTag>
      <PTag>
        Чтобы задать заголовок страницы, нужно использовать тег{' '}
        <CodeTag>title</CodeTag> внутри тега <CodeTag>head</CodeTag>. Например,
        вот так:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        Так выглядит заголовок страницы во вкладке браузера Mozilla Firefox.
      </PTag>
      <PTag>
        <Img src={tab} alt="Tab Mozilla" />
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Измените заголовок страницы с <RedText>Просто Заголовок</RedText> на{' '}
        <RedText>Заголовок HTML-страницы</RedText>.
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/28v1q842r?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/1" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/3" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  );
};

export default StructureHTMLDocument;
