import React, { useState } from 'react';
import languageExplainOptions from '../data/languageExplainOptions';
import {
  Button,
  ContentSection,
  Label,
  Select,
  Title,
} from '../helpers/GlobalStyles';
import { languageExplanation } from '../api/openaiAPI';
import Code from '../components/Code';

const CodeExplanation = () => {
  const [code, setCode] = useState(``);
  const [explanation, setExplanation] = useState(null);
  const [language, setLanguage] = useState({
    value: 'py',
    label: 'python',
  });

  const handleCodeExplanation = async () => {
    let res = await languageExplanation(code, language);
    res = res.split('.');
    res.pop();
    let data = '';
    res.forEach((sentance) => {
      data += sentance + '.\n';
    });
    setExplanation(data);
  };
  const codeHandler = (code) => {
    setCode(code);
  };
  const languageSetter = (value) => {
    if (setExplanation != null) {
      setCode(``);
      setExplanation(null);
    }
    setLanguage(
      languageExplainOptions.filter((language) => language.value == value)[0]
    );
  };

  return (
    <>
      <Title>Code Explainer</Title>
      <ContentSection>
        <Label>
          Select the Language explain
          <Select onChange={(e) => languageSetter(e.target.value)}>
            {languageExplainOptions.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Enter {language.label} Code !
          <Code
            code={code}
            lang={language.value}
            placeholder={`Enter ${language.label} Code`}
            handler={codeHandler}
          />
        </Label>
        {!explanation && (
          <Button onClick={handleCodeExplanation} width='15rem' left='2rem'>
            Explain now !
          </Button>
        )}
        {explanation && <Code code={explanation} lang='txt' />}
      </ContentSection>
    </>
  );
};

export default CodeExplanation;
