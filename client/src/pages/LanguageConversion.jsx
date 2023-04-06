import React, { useState } from 'react';
import { languageConversion } from '../api/openaiAPI';
import Code from '../components/Code';
import {
  Button,
  ContentSection,
  Label,
  Select,
  Title,
} from '../helpers/GlobalStyles';
import languageConvertOptions from '../data/languageConvertOptions';
const LanguageConversion = () => {
  const [codeOne, setCodeOne] = useState(``);
  const [codeTwo, setCodeTwo] = useState(null);
  const [language, setLanguage] = useState(languageConvertOptions[0]);

  const codeHandler = (code) => {
    setCodeOne(code);
  };
  const languageSetter = (value) => {
    if (codeTwo != null) {
      setCodeOne(``);
      setCodeTwo(null);
    }
    setLanguage(
      languageConvertOptions.filter((language) => language.value == value)[0]
    );
  };
  const handleLanguageConversion = async () => {
    const res = await languageConversion(codeOne, language);
    setCodeTwo(res);
  };

  return (
    <>
      <Title>Language Convertor</Title>
      <ContentSection>
        <Label>
          Select the Language to convert from
          <Select onChange={(e) => languageSetter(e.target.value)}>
            {languageConvertOptions.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Enter {language.languageOneLabel} Code !
          <Code
            code={codeOne}
            lang={language.languageOne}
            placeholder={`Enter ${language.languageOneLabel} Code`}
            handler={codeHandler}
          />
        </Label>
        {!codeTwo && (
          <Button onClick={handleLanguageConversion} width='15rem' left='2rem'>
            Convert now !
          </Button>
        )}
        {codeTwo && (
          <Label>
            {language.languageTwoLabel} Code
            <Code lang={language.languageTwo} code={codeTwo} />
          </Label>
        )}
        {codeTwo && (
          <Button
            onClick={() => {
              setCodeOne(``);
              setCodeTwo(null);
            }}>
            Reset
          </Button>
        )}
      </ContentSection>
    </>
  );
};

export default LanguageConversion;
