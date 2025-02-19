import { init } from '@module-federation/runtime';

init({
  name: 'mf_host',
  remotes: [
    {
      name: 'mf_remote',
      // Adding version to invalidate cache
      entry: `${process.env.REMOTE_BASE_URL}/remoteEntry.js?v=${+Date.now()}`,
    },
    // Other remote entries
  ]
});

import('./bootstrap');
