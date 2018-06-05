import React from 'react';
import { Header } from 'semantic-ui-react';
import CodeTag from '../../../UI/Code.jsx';
import PTag from '../../../UI/PStudyText';
import CourseStatus from '../../../UI/courseStatus';

const style = {
  width: '100%',
  height: '500px',
  border: '0',
  borderRadius: '4px',
  overflow: 'hidden'
};

const StructureHTMLDocument = () => {
  return (
    <section>
      <CourseStatus as="h3">× Курс «Структура HTML-документа»</CourseStatus>
      <Header as="h1">Простейшая HTML-страница [1/13]</Header>
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
      <iframe
        title="StructureHTMLDocument"
        src="https://codesandbox.io/embed/r05poq1qon?hidenavigation=1&codemirror=1&module=%2Findex.html"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </section>
  );
};

export default StructureHTMLDocument;
