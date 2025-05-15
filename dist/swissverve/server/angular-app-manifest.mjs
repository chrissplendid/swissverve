
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
    'index.csr.html': {size: 4175, hash: 'd8f72307bf8be6dc2c306e2cc31837febf4a7af8ed2abc0652a1669223096a49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4462, hash: '54295a621cc8c3390820892d5db92497e7bdec237b4d4ff148934776bd81d482', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'dashboard/account-settings/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_account-settings_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 28909, hash: 'a83d8a12d1b53b0c63cc391dda773a6f443b01021698eb129fbc93817502be15', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'styles-4NG44GVH.css': {size: 545, hash: 'waSFsUtidt8', text: () => import('./assets-chunks/styles-4NG44GVH_css.mjs').then(m => m.default)}
  },
};
