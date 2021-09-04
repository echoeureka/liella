export default [
  {
    type: 'select',
    name: 'gitOrPM',
    message: 'Choose one of',
    choices: [
      {
        title: 'About Git',
        value: 'git'
      },
      { title: 'About PM', value: 'PM' }
    ]
  },
  {
    type: 'select',
    name: 'step2',
    message: 'What to do?',
    choices: [{ title: 'proxies' }, { title: 'users' }]
  },
  {
    type: 'select',
    name: 'step3',
    message: 'what',
    choices: [{ title: 'add' }, { title: 'delete' }, { title: 'use' }]
  },
  {
    type: (_, answers) =>
      answers.gitOrPM === 'git' && answers?.step3 === 'add' ? 'text' : false,
    name: 'gitUserKey',
    message: 'Please input user key.'
  },
  {
    type: (_, answers) =>
      answers.gitOrPM === 'git' && answers?.step3 === 'add' ? 'text' : false,
    name: 'gitUsername',
    message: 'Please input user name.'
  },
  {
    type: (_, answers) =>
      answers.gitOrPM === 'git' && answers?.step3 === 'add' ? 'text' : false,
    name: 'email',
    message: 'Please input user email.'
  },
  {
    type: (_, answers) =>
      answers.gitOrPM === 'git' &&
      (answers?.step3 === 'delete' || answers?.step3 === 'use')
        ? 'select'
        : false,
    name: '',
    choices: Object.keys(config.get('git.users'))
      .filter(value => value !== 'current')
      .map(value => {
        return { title: config.get(`git.users.${value}`) };
      }),
    initial: config.get('git.users.current')
  }
];
