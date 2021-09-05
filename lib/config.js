import Conf from 'conf';

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
    packageManager: {
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

export { config };
