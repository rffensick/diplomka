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
  const md = '```js \n<script>\n\tJavaScript-код\n</script>```'
  return (
    <section>
      <Header as="h1">Подключение внешних стилей [10/10]</Header>
      <PTag>
        В вебе следующее разделение ролей: HTML отвечает за структуру документа,
        стили — за его внешний вид, а скрипты — за поведение. С помощью
        скриптов, например, можно «оживлять» страницу, добавляя анимацию и
        другие эффекты. Скрипты создаются с помощью языка JavaScript.
      </PTag>
      <PTag>
        Скрипты подключаются так же, как и стили: их либо пишут внутри страницы,
        либо подключают как внешние файлы.
      </PTag>
      <PTag>
        Встроенные скрипты пишут внутри тега <CodeTag>script</CodeTag>.
        Например:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <PTag>
        Тег <CodeTag>script</CodeTag> можно использовать в любом месте
        HTML-документа, но лучше вставлять его в самом конце перед закрывающим
        тегом <CodeTag>body</CodeTag>.
      </PTag>
      <PTag>
        Часть возможностей JavaScript постепенно переходит в CSS, например,
        возможность задавать плавное изменение значений свойств. Вы увидите это
        в задании.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Раскомментируйте тег <CodeTag>script</CodeTag>. Посмотрите, как
        подключенный скрипт оживит документ.
      </Target>
      <iframe
        src="https://codesandbox.io/embed/5kk0v18j4l?autoresize=1&codemirror=1&hidenavigation=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons solo-left">
        <Button to="/courses/basic-html/1/run/8" color="red">
          Предыдущее задание
        </Button>
      </div>
    </section>
  )
}

export default SimpleHTML
