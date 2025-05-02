
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
    'index.csr.html': {size: 2265, hash: '2de28a79fd57859d3b3ebb6b3fe6145372252e46c0d6c5c60e884b7ab45b39cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2624, hash: 'f77a0d5d8a4c16b2d70e7628e48074f085c39d567634c7c0ecf10302f638b184', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 7066, hash: '63fcfaeba4399662f4143946cd3d293eb4e6a789d175800da0201485b0f69c31', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 5673, hash: 'ac10f3d0940c003be82e01dbf8b751c4504e9545f9931a8d96bc7559c73c2da4', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
