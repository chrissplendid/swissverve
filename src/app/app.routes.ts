import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DepositComponent } from './deposit/deposit.component';
import { InternaltransferComponent } from './internaltransfer/internaltransfer.component';
import { InternationaltransferComponent } from './internationaltransfer/internationaltransfer.component';
import { LocaltransferComponent } from './localtransfer/localtransfer.component';
import { CryptotransferComponent } from './cryptotransfer/cryptotransfer.component';
import { LoanComponent } from './loan/loan.component';
import { NftComponent } from './nft/nft.component';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileComponent } from './profile/profile.component';
import { KycComponent } from './kyc/kyc.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
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
