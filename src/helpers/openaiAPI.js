import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export const getJsToPython = async (javascriptCode) => {
  try {
    const response = await openai.createCompletion({
      model: 'code-davinci-002',
      prompt: `#JavaScript to Python:\nJavaScript:\n${javascriptCode}\nPython:`,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['#'],
    });
    return response.data.choices[0].text;
  } catch (e) {
    return 'Failed to convert';
  }
};
