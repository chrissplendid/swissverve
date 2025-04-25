
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
    'index.csr.html': {size: 6397, hash: '5e59e6d2881ec2a92f57824c1185c3bf79a302091a724afeec9de4f482ad0cb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2341, hash: 'becec79615081d330e90017b12e0a520c70733ed05e39f8c2e1310e435fca1c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22142, hash: '90c1756460c96cddd2706a08c5567212a32dfc0674dfef290ea9941256da3e74', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 20439, hash: 'f70d02e1262e64f4fd3412c1a3256949bf23ea2d7e7346cae105241b13a23513', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 33606, hash: '2a3d4d8ee55edc693fd4298f9fe6139652a7966613a83bc159a5d2a985496b34', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 33579, hash: 'cd0c6bc832f046cac811d4964259332a5eb9704e0874513185782160b16df5e1', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 62079, hash: '1d60a0482e33bfb96c3e09068c7b8eb1d77c614ea153ed324216afe38fd41c67', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-LCZRYJJ6.css': {size: 230803, hash: 'srKqEcAGzE4', text: () => import('./assets-chunks/styles-LCZRYJJ6_css.mjs').then(m => m.default)}
  },
};
