import Markdown from 'markdown-to-jsx'
import React from 'react'
import { Header } from 'semantic-ui-react'
import Button from '../../../UI/Buttons'
import CodeTag from '../../../UI/Code'
import PTag from '../../../UI/PStudyText'
import Target from '../../../UI/Target'

const style = {
  width: '100%',
  height: '500px',
  border: '0',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop: '50px',
  boxShadow: '0px 0px 36px 0px rgba(0,0,0,0.75)'
}

const SimpleHTML = () => {
  const md = '```js \n<head>\n\t<style>\n\t\tCSS-код\n\t</style>\n</head>```'
  return (
    <section>
      <Header as="h1">Подключение стилей [7/10]</Header>
      <PTag>
        CSS-стили можно писать внутри HTML-кода страницы или подключать их как
        внешний файл.
      </PTag>
      <PTag>
        В первом случае стили называются «встроенными» или «инлайновыми», а
        писать их нужно внутри тега <CodeTag>style</CodeTag>. Этот тег обычно
        размещают внутри <CodeTag>head</CodeTag>. Например:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        Внутри <CodeTag>style</CodeTag> пишут обычный CSS-код.
      </PTag>
      <PTag>
        Инлайновые стили используют не так часто, например, для оптимизации
        скорости загрузки страницы. Чаще используют внешние стили, c которыми мы
        познакомимся позже.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Раскомментируйте тег <CodeTag>style</CodeTag>.
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/mqjrk5n969?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/6" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/8" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  )
}

export default SimpleHTML
