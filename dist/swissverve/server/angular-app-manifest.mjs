
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4158, hash: 'aa4237e239e4239b0f9d9dda979a77bc79f71e4dd39955b0ed50d7e4a46e1446', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4445, hash: '12cc393c045a75bfebfef5279280ebd5ace00b0ab100ef9f6353b78d33ec0e28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/account-settings/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_account-settings_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/card/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_card_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 28894, hash: 'e63c246cd95e37bfa94e1c80d41a4957aa4ae277819ed8b3084b1707ef100ebd', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'styles-4NG44GVH.css': {size: 545, hash: 'waSFsUtidt8', text: () => import('./assets-chunks/styles-4NG44GVH_css.mjs').then(m => m.default)}
  },
};
