
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/deposit"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/internal-transfer"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6496, hash: '929db32c1263ebed871f7727cd3ee97dbf53fd357f937531f315758820cf9440', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2440, hash: '6ae536bdbc72db841ed40244df767ef95f0b1a06197937df70fa3b2dfc6fe248', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 20538, hash: '0908489effae669f54de8f2a539dcc9ad95e8564db52d523bebecda7c8ef3af7', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22241, hash: '72aff8030e5057f1409ef2ff7f0ecac05febb9b403cfcf53669a2f0da44404c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 33705, hash: 'e530ca0059fe8bbb533e83f4159f05561a80b8a9f22858b8a319004410ce9e4b', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 62178, hash: 'e0fd1bec90afd6f2a7d4fb879a59cfe308ee1906a60be81cc10ee5b6f55d58de', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 33678, hash: 'e4bcf84579cb1ec127cac85a81ef5870c7684fc360106b6b90c5db4508761de5', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'styles-LCZRYJJ6.css': {size: 230803, hash: 'srKqEcAGzE4', text: () => import('./assets-chunks/styles-LCZRYJJ6_css.mjs').then(m => m.default)}
  },
};
