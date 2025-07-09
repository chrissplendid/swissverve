// Angular
import { Routes } from '@angular/router';

// Guards
import { AuthGuard } from './auth.guard';

// Layout
import { NavComponent } from './nav/nav.component';

// Public Pages
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

// Dashboard and Protected Components
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CardComponent } from './card/card.component';
import { CryptotransferComponent } from './cryptotransfer/cryptotransfer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { InternaltransferComponent } from './internaltransfer/internaltransfer.component';
import { InternationaltransferComponent } from './internationaltransfer/internationaltransfer.component';
import { KycComponent } from './kyc/kyc.component';
import { LocaltransferComponent } from './localtransfer/localtransfer.component';
import { LoanComponent } from './loan/loan.component';
import { NftComponent } from './nft/nft.component';
import { ProfileComponent } from './profile/profile.component';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsersComponent } from './users/users.component';
import { TopUpComponent } from './top-up/top-up.component';

export const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'services', component: ServicesComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AnalyticsComponent },
      { path: 'account-settings', component: AccountsettingsComponent },
      { path: 'card', component: CardComponent },
      { path: 'crypto-transfer', component: CryptotransferComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'internal-transfer', component: InternaltransferComponent },
      { path: 'international-transfer', component: InternationaltransferComponent },
      { path: 'kyc', component: KycComponent },
      { path: 'loan', component: LoanComponent },
      { path: 'local-transfer', component: LocaltransferComponent },
      { path: 'nft', component: NftComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'stocks', component: StocksComponent },
      { path: 'top-up', component: TopUpComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'users', component: UsersComponent },
    ]
  }
];
