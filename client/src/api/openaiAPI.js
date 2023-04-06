import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const languageConversion = async (code, language) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${language.languageOneLabel}: \n ${code} \n\n ${language.languageTwoLabel}:\n`,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['"""'],
    });
    return response.data.choices[0].text;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const languageExplanation = async (code, language) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `# ${language.label} \n${code}\n\n"""\nHere\'s what this above ${language.label} code is doing:\n`,
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['"""'],
    });
    return response.data.choices[0].text;
  } catch (e) {
    return e;
  }
};

export const sqlGenerator = async (table, query) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `### SQL tables, with their properties:\n#\n${table}\n#\n###\n${query}\n`,
      temperature: 0,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['#', ';'],
    });
    return response.data.choices[0].text;
  } catch (e) {
    return e;
  }
};

export const bugFixer = async (code, language) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `##### Fix bugs in the below function\n \n### Buggy ${language.value}\n${code}\n    \n### Fixed ${language.value}`,
      temperature: 0,
      max_tokens: 182,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['###'],
    });
    return response.data.choices[0].text;
  } catch (e) {
    return e;
  }
};

export const timeComplex = async (code, language) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `##### Fix bugs in the below function\n \n### Buggy ${language.value}\n${code}\n    \n### Fixed ${language.value}`,
      temperature: 0,
      max_tokens: 182,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['###'],
    });
    return response.data.choices[0].text;
  } catch (e) {
    return e;
  }
};
