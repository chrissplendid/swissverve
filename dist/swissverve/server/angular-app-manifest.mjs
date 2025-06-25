
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
    "route": "/dashboard/account-settings"
  },
  {
    "renderMode": 2,
    "route": "/dashboard/card"
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
  },
  {
    "renderMode": 2,
    "route": "/dashboard/users"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5304, hash: '343ba4bc01f3391b5c8ddcb741fe2d029bec1ad5d6fda1e4f53933e86f709abb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5243, hash: '1deeb1d4602ff78868669af7d9ad302e0f5311e69c763a27d653e5ab26487d3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/account-settings/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_account-settings_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/card/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_card_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 30211, hash: 'a66c1554b0cae85e34b8a5a004be83c3ece88bef695e5ebcdbe1c4caa1c840bd', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'styles-RXDQRN22.css': {size: 5941, hash: 'bd0YahnFEWQ', text: () => import('./assets-chunks/styles-RXDQRN22_css.mjs').then(m => m.default)}
  },
};
