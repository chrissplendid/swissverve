
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
    'index.csr.html': {size: 2265, hash: '5da4430ced68d83d55bbc12b37b32cd50b19150a4c865dcc86ba8b209c7e44ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2624, hash: 'b4994c185f0adad22dfa51d64b32d511ea77d73c2560f23aadaf5c0fe8cd4a8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6070, hash: 'c3d392b6635db919e407683eb124c04e19aff70ce97883b19449821ca399369f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 10424, hash: 'bd459a2253f851badb97a99a25cb92ca1c77e59a215a3a9d915c90c56d6e6b75', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 10440, hash: '916a3dc714a881a728c49959534564b560a3786f7e353982c6ebb4085be8c8fd', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 14645, hash: '900ae4ea670ede76502038f864f4d417f9fa8c453356f52abcdc5202d33c9c06', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 10418, hash: 'f082bea986ed16374270113da03f6651643a7644aebf1c71f16f9ae2081e4925', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 12090, hash: 'b412cc3d25497f5bab055e0aa0737e31542083e0bb2de19910d426d498fd7fb4', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 10416, hash: '5754110e60a77b46e82cfdfcfde9c9e7c3f790b008e7c9fd11d89711e985a750', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 10387, hash: '0d1327c6334587b2dc5aaad7a79229186c196a34ee93409c26bdd3c48bb5218d', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 10394, hash: '20b194796bd56afcf5728d6a435bddb83ccbd7225a8f01bf89ad68b3731019cd', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 10385, hash: 'd3cfe4bfef76813810724ce78b9d599c0f4cfba4a07a0a235e8d14e3a97019a2', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6134, hash: '14eca786c306db8b98ee0c94d9cfb6fba6e2263e8fbb86a8a7a58dde20145ec1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 10396, hash: 'a911d5e62464b6dc13ccc11a06b81be3a303b83f7549a1eaf2e3161ac03295f3', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 10412, hash: '08e8c8da8328df750da86eb82efedd9cc303196f6c045f7939589ad80b39b9fd', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 10385, hash: 'e1dfd16ed9a0c8362bc07c6ac4dd4e0c115a168a3661e765db8c4ef9d798a2e1', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'styles-QB32ADM3.css': {size: 179, hash: '0AY5mYcoWQ0', text: () => import('./assets-chunks/styles-QB32ADM3_css.mjs').then(m => m.default)}
  },
};
