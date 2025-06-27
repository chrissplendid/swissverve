
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
    'index.csr.html': {size: 5304, hash: '6eaaa31b9c02525c9b893c2e6c0cec1ecfa558acf8cbf32579d7c5043860f092', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5243, hash: '95cbfd78abc410ac9bb5c522c630e4fd786d71b9e2482dbc899e8e0121ba46eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/card/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_card_index_html.mjs').then(m => m.default)},
    'dashboard/account-settings/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_account-settings_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/users/index.html': {size: 30260, hash: 'bd89ec68f19a71757dc219575b3d9659422019374aa77f5a6168202d14ed568a', text: () => import('./assets-chunks/dashboard_users_index_html.mjs').then(m => m.default)},
    'styles-7U3QIYCN.css': {size: 6145, hash: 'RgzqdfypjJU', text: () => import('./assets-chunks/styles-7U3QIYCN_css.mjs').then(m => m.default)}
  },
};
