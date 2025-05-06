
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
    'index.csr.html': {size: 5754, hash: '1ce53f003e2a6d3b6e137085a83ac24f1f4aecdcc0c6805816e95b88b374b5a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6121, hash: 'b4cafa0812d9a0a65b22173b0ca7ba8b35d8bdac8a21cb237c5fe2476f51bba6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29869, hash: '14837c609e72e1338f8612bf279c829a0e96eef5fb6b5b4d24939a4dd511f53f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 9159, hash: '86a1789667e5cc556af3891482b648469fe3863f0dc1f3fb0d3f6f1008e8072a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 271491, hash: 'b610aa2bbbef5658b0225c6a1810e7c2474aa1a32dd3084b56e469ed70cec536', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 33620, hash: '6144812a93a4a6a172b0078e7794c817513b8637f897d81b3364abcfc5322bfe', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
