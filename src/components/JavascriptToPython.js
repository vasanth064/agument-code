import React, { useState } from 'react';
import { getJsToPython } from './../helpers/openaiAPI';
import Code from './Code';
import { Button } from './../GlobalStyles';
const JavascriptToPython = () => {
  const [javascriptCode, setJavascriptCode] = useState(``);
  const [pythonCode, setPythonCode] = useState(null);

  const javascriptCodeHandler = (code) => {
    setJavascriptCode(code);
  };

  const handleOpenaiAPI = async () => {
    const res = await getJsToPython(javascriptCode);
    setPythonCode(res);
  };

  return (
    <div>
      <h1>Javascript To Python</h1>
      <Code
        code={javascriptCode}
        lang='js'
        placeholder='Javascript Code'
        handler={javascriptCodeHandler}></Code>
      <Button onClick={handleOpenaiAPI}>Convert now!</Button>
      {pythonCode && <Code lang='python' code={pythonCode}></Code>}
    </div>
  );
};

export default JavascriptToPython;
