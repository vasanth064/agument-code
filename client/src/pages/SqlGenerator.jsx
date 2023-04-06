import React, { useState } from 'react';
import {
  Button,
  ContentSection,
  Label,
  Select,
  Title,
} from '../helpers/GlobalStyles';
import { sqlGenerator } from '../api/openaiAPI';
import Code from '../components/Code';

const SqlGenerator = () => {
  const [table, setTable] = useState(``);
  const [query, setQuery] = useState(``);
  const [sqlQuery, setSqlQuery] = useState(null);

  const tableHandler = (table) => {
    setTable(table);
  };

  const queryHandler = (query) => {
    setQuery(query);
  };

  const handleSqlQueryGeneration = async () => {
    const res = await sqlGenerator(table, query);
    setSqlQuery(res);
  };

  return (
    <>
      <Title>SQL Generator</Title>
      <ContentSection>
        <Label>
          Enter SQL Table !
          <Code
            code={table}
            lang='txt'
            placeholder={`Enter SQL Table`}
            handler={tableHandler}
          />
        </Label>
        <Label>
          Describe the query you want !
          <Code
            code={query}
            lang='txt'
            placeholder={`Describe the query you want ...`}
            handler={queryHandler}
          />
        </Label>
        {!sqlQuery && (
          <Button onClick={handleSqlQueryGeneration} width='15rem' left='2rem'>
            Generate Now !
          </Button>
        )}
        {sqlQuery && (
          <Label>
            SQL Query
            <Code lang='sql' code={sqlQuery} />
          </Label>
        )}
        {sqlQuery && (
          <Button
            onClick={() => {
              setTable(``);
              setQuery(``);
              setSqlQuery(null);
            }}>
            Reset
          </Button>
        )}
      </ContentSection>
    </>
  );
};

export default SqlGenerator;
