
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15725, hash: '339b02e721107b61c6eeb84b496d446c801174384f87d3abb026b3f04fed68c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11662, hash: '5272b59e5ca1116b91d79cd349e933282b8f5a5a497ddc250ebb8e1e182e5f91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18941, hash: '2f1e27e08a8f33ee9d5a7760f7ab407f5c689c6230930d9626c6fede4bc7a075', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LCZRYJJ6.css': {size: 230803, hash: 'srKqEcAGzE4', text: () => import('./assets-chunks/styles-LCZRYJJ6_css.mjs').then(m => m.default)}
  },
};
