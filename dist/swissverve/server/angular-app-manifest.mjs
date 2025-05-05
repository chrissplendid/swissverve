
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
  },
  {
    "renderMode": 2,
    "route": "/dashboard/international-transfer"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/local-transfer"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/crypto-transfer"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/loan"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/nft"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/stocks"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/transactions"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/profile"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/kyc"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2921, hash: '0e831693f54e0a5ac41659c28993d09e8c16dfdb51152b080d58925552c85a4e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3280, hash: '46747d0a78a2b1a090759437dc37f5848d589198bf2993048462f0a657ceab4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 268657, hash: 'a23e1b5202e1ea258f2e1fa440dc53ecbe24a934078dde7c2c950347783e8fc8', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 6329, hash: '2db3243e0464818ac7f1e734a9d11a98cb93305bb5da87be86b877f74a692df3', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
