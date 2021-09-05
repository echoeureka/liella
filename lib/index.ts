import Conf from 'conf';
import prompts from 'prompts';
import defaults from './defaults';
import questions from './questions';

const config = new Conf({
  defaults
});

(async () => {
  const response = await prompts(questions);
})();
