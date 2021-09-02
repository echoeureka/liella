import Conf from 'conf';
import prompts from 'prompts';

const config = new Conf({
  defaults: {
    git: {
      proxies: {
        current: 'default',
        default: 'default',
        clashX: 'http://127.0.0.1:7890'
      },
      users: {
        current: 'current'
      }
    },
    pm: {
      proxies: {},
      registries: {
        current: 'npm',
        npm: {
          home: 'https://www.npmjs.org',
          registry: 'https://registry.npmjs.org/'
        },
        yarn: {
          home: 'https://yarnpkg.com',
          registry: 'https://registry.yarnpkg.com/'
        },
        taobao: {
          home: 'https://npm.taobao.org',
          registry: 'https://registry.npm.taobao.org/'
        },
        tencent: {
          home: 'https://mirrors.cloud.tencent.com/npm/',
          registry: 'https://mirrors.cloud.tencent.com/npm/'
        },
        npmMirror: {
          home: 'https://skimdb.npmjs.com/',
          registry: 'https://skimdb.npmjs.com/registry/'
        },
        github: {
          home: 'https://npm.pkg.github.com/',
          registry: 'https://npm.pkg.github.com/'
        }
      }
    }
  }
});

const questions = [
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

(async () => {
  await prompts(questions);
})();
