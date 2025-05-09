import { AboutComponent } from './about/about.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { CryptotransferComponent } from './cryptotransfer/cryptotransfer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { InternaltransferComponent } from './internaltransfer/internaltransfer.component';
import { InternationaltransferComponent } from './internationaltransfer/internationaltransfer.component';
import { LocaltransferComponent } from './localtransfer/localtransfer.component';
import { LoanComponent } from './loan/loan.component';
import { NftComponent } from './nft/nft.component';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileComponent } from './profile/profile.component';
import { KycComponent } from './kyc/kyc.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
    { path: '', component: NavComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'faq', component: FaqComponent },
        { path: 'services', component: ServicesComponent },
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
            { path: '', component: AnalyticsComponent, canActivate: [AuthGuard] },
            { path: 'deposit', component: DepositComponent, canActivate: [AuthGuard] },
            { path: 'internal-transfer', component: InternaltransferComponent, canActivate: [AuthGuard] },
            { path: 'international-transfer', component: InternationaltransferComponent, canActivate: [AuthGuard] },
            { path: 'local-transfer', component: LocaltransferComponent, canActivate: [AuthGuard] },
            { path: 'crypto-transfer', component: CryptotransferComponent, canActivate: [AuthGuard] },
            { path: 'loan', component: LoanComponent, canActivate: [AuthGuard] },
            { path: 'nft', component: NftComponent, canActivate: [AuthGuard] },
            { path: 'stocks', component: StocksComponent, canActivate: [AuthGuard] },
            { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
            { path: 'kyc', component: KycComponent, canActivate: [AuthGuard] }
        ]
    }
];
