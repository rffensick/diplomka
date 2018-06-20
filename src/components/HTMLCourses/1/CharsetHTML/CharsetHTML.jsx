import Markdown from 'markdown-to-jsx'
import React from 'react'
import { Header } from 'semantic-ui-react'
import Button from '../../../UI/Buttons'
import CodeTag from '../../../UI/Code'
import PTag from '../../../UI/PStudyText'
import RedText from '../../../UI/RedText'
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
  const md = '```js \n<meta charset="имя кодировки">```'
  return (
    <section>
      <Header as="h1">Кодировка HTML-страницы [3/10]</Header>
      <PTag>
        Кодировку HTML-страницы нужно указывать для того, чтобы веб-браузер мог
        правильно отображать текст на странице. Если браузер неправильно
        «угадает» кодировку, то вместо текста будут отображаться иероглифы.
      </PTag>
      <PTag>
        Чтобы сообщить браузеру кодировку HTML-страницы, необходимо внутри тега{' '}
        <CodeTag>head</CodeTag> использовать тег:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        Самая распространённая современная кодировка — <RedText>utf-8</RedText>.
        Используйте её во всех своих проектах.
      </PTag>
      <PTag>
        Для кириллицы в Windows <RedText>charset</RedText> часто задавали как{' '}
        <RedText>windows-1251</RedText>. Но сейчас это считается плохой
        практикой.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Установите правильную кодировку: <RedText>utf-8</RedText>.
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/6m68ok08w?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/2" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/4" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  )
}

export default SimpleHTML
