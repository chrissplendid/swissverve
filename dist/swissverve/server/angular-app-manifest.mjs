
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
    'index.csr.html': {size: 4837, hash: 'b68724620fbe32a1c1dad9be40c9e5130c4aee9a5b877f173c650df273877e05', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5217, hash: '11d19038bd125589d932fc9e101a4209af2a66e70a4303be29a75ee966723ccc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 8244, hash: '6f0b44417d0b10009d00674723ab8acdac9d3036ee82ddbae083b461febd1e16', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
