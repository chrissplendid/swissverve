
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
    'index.csr.html': {size: 4173, hash: '07503995b489573b88a6267749f931fda64c60383b3173f7a42c6aa71232d4bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4460, hash: 'ac0e31231e2c1b8d274a6c63c5f2aed14a4cf0ba4ebce6911e0198d5ed1bcb13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 27734, hash: 'e524aa9f018850e6306d6eaefc450aa81780c8e143c1745b2453773e04ce6ccb', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'styles-R3PGLRH3.css': {size: 399, hash: 'zSoohiBAM4o', text: () => import('./assets-chunks/styles-R3PGLRH3_css.mjs').then(m => m.default)}
  },
};
