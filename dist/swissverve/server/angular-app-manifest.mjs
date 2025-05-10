
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
    'index.csr.html': {size: 3925, hash: '4932f58213ef8248fcb7eff077d59e6cb2e2f7b23d072c8b8689c2b619524c69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4277, hash: '21f8c412340ff899ebfa860e5bee715aee54a0cc7ebcb0b2bd050f4e5c069f15', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 31866, hash: 'b9f419bcdbd4b59a33bf3b840129ccac720eef22ff182a43b7a218f81ae2b38c', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
