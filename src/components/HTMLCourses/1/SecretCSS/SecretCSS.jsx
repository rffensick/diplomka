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
  const md = '```js \n/*\nh1 {\n\tcolor: red;\n}\n*/```'
  return (
    <section>
      <Header as="h1">Тайна CSS-редактора [8/10]</Header>
      <PTag>
        Теперь вы знаете про встроенные стили и можете узнать тайну нашего
        CSS-редактора.
      </PTag>
      <PTag>
        CSS-код из редактора незаметно добавляется внутрь тега{' '}
        <CodeTag>style</CodeTag>, а этот тег добавляется в мини-браузер.
      </PTag>
      <PTag>
        В этом задании CSS-стили такие же, как и в предыдущем, но вынесены в
        CSS-редактор и закомментированы. Комментарии в CSS работают так же, как
        в HTML — позволяют временно отключить какой-то кусок кода.
      </PTag>
      <PTag>
        CSS-комментарии задаются с помощью символов <RedText>/*</RedText> и{' '}
        <RedText>*/</RedText>:
      </PTag>
      <PTag>
        <Markdown children={md} />
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Раскомментируйте стили в CSS-редакторе. Для этого удалите символы{' '}
        <RedText>/*</RedText> и <RedText>*/</RedText>:
      </Target>
      <iframe
        src="https://codesandbox.io/embed/4z7o3k798x?autoresize=1&codemirror=1&hidenavigation=1&module=%2Fsrc/index.css"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons both">
        <Button to="/courses/basic-html/1/run/7" color="red">
          Предыдущее задание
        </Button>
        <Button to="/courses/basic-html/1/run/9" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  )
}

export default SimpleHTML
