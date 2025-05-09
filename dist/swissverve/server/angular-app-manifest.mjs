
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
    'index.csr.html': {size: 4948, hash: 'b5133ec9f4ab8b58e0d96b156e52d01181c497650049497996a3a17a81ead697', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5328, hash: '4a8fa4daa8d02211e6d52aae98263730c268550036ff47ed5c6d395cbfb9b5f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 8355, hash: '0228fb5fdb7b7f53441a718246b4cb7f3c0b5bef55d51c5163baa3662584ea7a', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
