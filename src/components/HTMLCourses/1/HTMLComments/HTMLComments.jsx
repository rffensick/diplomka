import Markdown from 'markdown-to-jsx';
import React from 'react';
import { Header, List, Message } from 'semantic-ui-react';
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
  const md = '```js \n<!-- любой текст -->```';
  return (
    <section>
      <Header as="h1">HTML-комментарии [6/13]</Header>
      <PTag>Комментарий в HTML-коде задаётся так:</PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        Текст внутри комментария не отображается браузером на странице.
        Комментарии обычно используются в следующих случаях:
      </PTag>
      <PTag>
        <List bulleted>
          <List.Item>
            Для комментирования кода. Всегда полезно оставить подсказку.
          </List.Item>
          <List.Item>
            Для временного отключения кода. Удалять код неудобно, так как его
            надо будет восстанавливать, а закомментировать и потом
            раскомментировать — самое лучшее решение.
          </List.Item>
        </List>
      </PTag>
      <PTag>
        Комментарии можно использовать в любом месте страницы, кроме тега{' '}
        <CodeTag>title</CodeTag> — внутри него они не работают. Внутри тега{' '}
        <CodeTag>style</CodeTag> HTML-комментарии тоже не работают, так как в
        CSS код комментируется другим способом, о котором вы узнаете в курсе
        «Знакомство с CSS».
      </PTag>
      <PTag>
        <Message
          warning
          content="Чтобы быстро закомментировать или раскомментировать строку кода в HTML
        или CSS редакторе, можете использовать сочетание клавиш ctrl + / или cmd
        + /."
        />
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Сначала раскомментируйте оба тега <CodeTag>p</CodeTag> в разделе
        <RedText>Комментарии для пояснений</RedText>
      </Target>
      <Target step="Цель 2">
        Затем закомментируйте любой <CodeTag>p</CodeTag> в разделе{' '}
        <RedText>Или когда удалять жалко</RedText>
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/m70qzl8o1y?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/5" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/7" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  );
};

export default SimpleHTML;
