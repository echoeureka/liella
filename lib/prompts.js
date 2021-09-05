import prompts from 'prompts';

const questions = [
  {
    type: 'select',
    name: 'feature',
    message: 'Please choose one of or exit',
    choices: [
      { title: 'Git http proxy', value: 'gitHttpProxy' },
      { title: 'Git user', value: 'gitUser' },
      { title: 'Package manager http proxy', value: 'packageManagerHttpProxy' },
      { title: 'Package Manager Registry', value: 'packageManagerRegistry' }
    ]
  },
  {
    type: 'select',
    name: 'operation',
    message: 'Please choose one of or exit',
    choices: prev => {
      const choices = [
        { title: 'Add', value: 'add' },
        { title: 'Remove', value: 'remove' },
        { title: 'Use', value: 'use' },
        { title: 'Cancel', value: 'cancel' }
      ];
      return prev.endsWith('HttpProxy') ? choices : choices.slice(0, -1);
    }
  },
  {
    type: (prev, values) => {
      if (prev === 'add') return 'text';
      else if (prev === 'remove') return 'multiselect';
      else if (prev === 'use') return 'select';
      else if (prev === 'cancel') {
        if (values?.feature.startWith('git')) return 'toggle';
        console.log('cancel');
        return false;
      }
    },
    name: 'selectedValues'
  }
];

const main = async () => {
  const response = await prompts(questions);
};

export default main;
