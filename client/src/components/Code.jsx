import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-js-extras';
import 'prismjs/components/prism-js-templates';
import 'prismjs/components/prism-sql';

// import 'prismjs/components/prism-java';
import 'dracula-prism/dist/css/dracula-prism.css';

const Code = ({ code, lang, placeholder, handler }) => {
  const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
      .split('\n')
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join('\n');

  return (
    <>
      <Editor
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0.75rem 0 0 0.75rem',
        }}
        value={code}
        id='editior'
        textareaId='codeArea'
        className='editor'
        onValueChange={(value) => handler(value)}
        highlight={(code) => hightlightWithLineNumbers(code, languages[lang])}
        padding={25}
        placeholder={placeholder || ''}
      />
    </>
  );
};

export default Code;
