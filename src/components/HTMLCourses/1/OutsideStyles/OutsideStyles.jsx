import Markdown from 'markdown-to-jsx'
import React from 'react'
import { Header } from 'semantic-ui-react'
import Button from '../../../UI/Buttons'
import RedText from '../../../UI/RedText'
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
  const md =
    '```js \n<head>\n\t<link href="style.css" rel="stylesheet">\n</head>```'
  return (
    <section>
      <Header as="h1">Подключение внешних стилей [9/10]</Header>
      <PTag>
        Чаще всего стили подключают из внешнего файла с расширением .css. Для
        этого используется тег <CodeTag>link</CodeTag>. Например:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        В атрибуте <RedText>href</RedText> задают адрес файла, а атрибут{' '}
        <RedText>rel="stylesheet"</RedText> говорит браузеру, что мы подключаем
        стили, а не что-то другое.
      </PTag>
      <PTag>
        Лучше подключать стили внутри <CodeTag>head</CodeTag>, но это
        необязательно. Тег <CodeTag>link</CodeTag> будет работать и в другом
        месте страницы.
      </PTag>
      <PTag>
        В этом задании вы подключите внешний стилевой файл, который расположен
        по адресу <RedText>src/index.css</RedText> щёлкните по ссылке, чтобы
        открыть этот файл в браузере.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Раскомментируете <CodeTag>link</CodeTag> тег в <CodeTag>head</CodeTag>,
      </Target>
      <iframe
        src="https://codesandbox.io/embed/jl7qx45j89?autoresize=1&codemirror=1&hidenavigation=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/8" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/10" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  )
}

export default SimpleHTML
