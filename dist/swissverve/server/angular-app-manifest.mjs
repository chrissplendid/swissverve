
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
    'index.csr.html': {size: 6313, hash: '3be86e4b20e41dc6740b22f06669f079cc9eac528aeed1b10cc29dc4fde0a91b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6680, hash: 'dfe0d844baa5b0acce06c244adf9e10d9bcb1b92435c830ca7eaab6bb5f93e2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30460, hash: '02fc43bc65959a25a743b4a4922b0288df03354d9e8cc02da7eef10b2de1f858', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 16627, hash: 'c7288ae1cd34a716df470e009f1b2f42c78173b9ad1f2ce63066ce97a73a96ca', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 9718, hash: 'bddebe18b16ef258c828de1869992116d67ad871e4d7d3e6efa50655594955c0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14310, hash: 'ac25a38cec2ab238eecc229b8a7fb74f65b13db8eb8aba0c46371643398899e1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 272050, hash: '3b772984fc216ad69813373d1c4525ecdabb9633f3ddc010e0cd37ea782a05af', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 16121, hash: 'cd46656420624d0d278426d2cb9879d772b49ed09fe591f26fc4fd42e633602c', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 34211, hash: '3a17445c7924d85c3a3bcb7f1a83058fc28e69c2b525125adb96a326032c80c6', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
