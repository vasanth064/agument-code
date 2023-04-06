import React, { useState } from 'react';
import bugFixerOptions from '../data/bugFixerOptions';
import {
  Button,
  ContentSection,
  Label,
  Select,
  Title,
} from '../helpers/GlobalStyles';
import { bugFixer } from '../api/openaiAPI';
import Code from '../components/Code';

const BugFixer = () => {
  const [code, setCode] = useState(``);
  const [fixedCode, setFixedCode] = useState(null);
  const [language, setLanguage] = useState({
    value: 'py',
    label: 'python',
  });

  const handleBugFixer = async () => {
    let res = await bugFixer(code, language);

    setFixedCode(res);
  };

  const codeHandler = (code) => {
    setCode(code);
  };

  const languageSetter = (value) => {
    if (fixedCode != null) {
      setCode(``);
      fixedCode(null);
    }
    setLanguage(
      bugFixerOptions.filter((language) => language.value == value)[0]
    );
  };

  return (
    <>
      <Title>Bug Fixer</Title>
      <ContentSection>
        <Label>
          Select the Language explain
          <Select onChange={(e) => languageSetter(e.target.value)}>
            {bugFixerOptions.map(({ value, label }) => (
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
        {!fixedCode && (
          <Button onClick={handleBugFixer} width='15rem' left='2rem'>
            Bug Fix !
          </Button>
        )}
        {fixedCode && <Code code={fixedCode} lang={language.value} />}
        {fixedCode && (
          <Button
            onClick={() => {
              code(``);
              fixedCode(null);
            }}>
            Reset
          </Button>
        )}
      </ContentSection>
    </>
  );
};

export default BugFixer;
