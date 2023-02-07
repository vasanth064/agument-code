import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'dracula-prism/dist/css/dracula-prism.css';

const Code = ({ code, lang, placeholder, handler }) => {
  return (
    <>
      <Editor
        value={code}
        id='editior'
        onValueChange={(value) => handler(value)}
        highlight={(code) => highlight(code, languages[lang])}
        padding={10}
        placeholder={placeholder || ''}
      />
    </>
  );
};

export default Code;
