
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
    'index.csr.html': {size: 4838, hash: 'fdee733acf9f70b0fdd329c943bb1ded3c95de9c14019d8cea91230f9f311956', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5218, hash: 'be1d0a2322e969de6c01496664ed0a3eed95d7d618d8c972d7f75679335a1d96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'dashboard/crypto-transfer/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_crypto-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/deposit/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_deposit_index_html.mjs').then(m => m.default)},
    'dashboard/internal-transfer/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_internal-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/international-transfer/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_international-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/kyc/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_kyc_index_html.mjs').then(m => m.default)},
    'dashboard/nft/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_nft_index_html.mjs').then(m => m.default)},
    'dashboard/loan/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_loan_index_html.mjs').then(m => m.default)},
    'dashboard/local-transfer/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_local-transfer_index_html.mjs').then(m => m.default)},
    'dashboard/stocks/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_stocks_index_html.mjs').then(m => m.default)},
    'dashboard/profile/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_profile_index_html.mjs').then(m => m.default)},
    'dashboard/transactions/index.html': {size: 32750, hash: '24192d1197ba35286cfbfd08530c9383a705b7b0327bc747ebdd6edb502ec675', text: () => import('./assets-chunks/dashboard_transactions_index_html.mjs').then(m => m.default)},
    'styles-Y6VAXYGL.css': {size: 294, hash: 'Jfq+rZxxo18', text: () => import('./assets-chunks/styles-Y6VAXYGL_css.mjs').then(m => m.default)}
  },
};
