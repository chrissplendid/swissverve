
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
    'index.csr.html': {size: 6313, hash: 'c99c6478389e28993cd4d908310b59315f9ac584ff6252c48f5a92824d734405', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6680, hash: '72fefc0fb3ebc4b253cf150616b1f1d6f090f41a7b738d081177292c148898d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30428, hash: '7411b0424167e46b3a611e1c0ed142ba051134573c2e5254d03c5c25b62d9f2e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 9718, hash: 'ba36d51f72f0a587fe07be50224e81b8be1d6d0c3f1ff4244fcc7223a0e97be4', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 34179, hash: '05f8da210dd05239ee6eb34a08c2a921d90d0bb35e57ff0a2b60238b9b8fa9b5', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 272050, hash: '4718953b7dc52d65f4539c242b934a6e9494ae5ec70d5f1e2bb768947fbf4772', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
