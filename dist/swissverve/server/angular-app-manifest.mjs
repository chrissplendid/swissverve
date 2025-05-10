
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
    'index.csr.html': {size: 4815, hash: '2db8a905ee05b2ce4321ed2356e4d706864945b9ba63d1579299ded2e8622055', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5195, hash: 'bab63dbf135b9a496d69b1d24b040c911fbfb7d1a7b37fe9e6f67a993231df0a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 32756, hash: 'ad2af5256ece55b55320c563af2c3bfd29263acca4e29913d93d845f2a51c90d', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
