
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
    'index.csr.html': {size: 2912, hash: '821e8df3858cfa7f881ff2a94b67314fe4fca565f704d0c9c7387c6ba513a450', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3271, hash: 'f0712da16229fd017fbd6af9b54f53116fa8400ca04775b15d29081d705799d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 268648, hash: 'eead27aaddef6d930a8d4e21ad0a9835df46935754cea3e75029d3c48a248163', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 6320, hash: 'f922492458a01f8a06d43a54fd793aa55abd3db381a3b786097e6b218d321e49', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
