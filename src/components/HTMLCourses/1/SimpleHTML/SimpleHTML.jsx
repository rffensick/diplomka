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
  return (
    <section>
      <Header as="h1">Простейшая HTML-страница [1/10]</Header>
      <PTag>Простейшая HTML-страница состоит как минимум из трёх тегов.</PTag>
      <PTag>
        Тег <CodeTag>html</CodeTag> — это контейнер, в котором находится всё
        содержимое страницы, включая теги <CodeTag>head</CodeTag> и{' '}
        <CodeTag>body</CodeTag>. Как правило, тег<CodeTag>html</CodeTag> идёт в
        документе вторым после доктайпа.
      </PTag>
      <PTag>
        Тег <CodeTag>head</CodeTag> предназначен для хранения других элементов,
        цель которых — помочь браузеру в работе с данными. Содержимое этого тега
        не отображается напрямую.
      </PTag>
      <PTag>
        Тег <CodeTag>body</CodeTag> предназначен для хранения содержания
        веб-страницы (контента), отображаемого в окне браузера.
      </PTag>
      <Header as="h2">А таперь немного практики!</Header>
      <Target step="Цель 1">
        Добавьте текст внутрь тега <CodeTag>body</CodeTag>. Как минимум 10
        символов.
      </Target>
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/r05poq1qon?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      <div className="bottom-buttons solo-right">
        <Button to="/courses/basic-html/1/run/2" color="green">
          Следующие задание
        </Button>
      </div>
    </section>
  )
}

export default SimpleHTML
