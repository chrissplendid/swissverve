
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
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/login"
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
    "route": "/dashboard/crypto-transfer"
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
    "route": "/dashboard/kyc"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/loan"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/local-transfer"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/nft"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/profile"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/stocks"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/transactions"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4173, hash: '383bf3a2044da400bb324065ce6ad3d515a68bd0740dc6cde02c21458b787a16', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4460, hash: '939865084d486ffe4e2505d8191d29305cdeb6090a8e4dd750393d592b617984', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 28150, hash: '043ed32d01cd5367098de7cfdb034561d7e66e00be525516be2e1b93ee2f629d', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'styles-R3PGLRH3.css': {size: 399, hash: 'zSoohiBAM4o', text: () => import('./assets-chunks/styles-R3PGLRH3_css.mjs').then(m => m.default)}
  },
};
