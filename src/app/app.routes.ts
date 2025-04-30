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

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: AnalyticsComponent },
            { path: 'deposit', component: DepositComponent },
            { path: 'internal-transfer', component: InternaltransferComponent },
            { path: 'international-transfer', component: InternationaltransferComponent },
            { path: 'local-transfer', component: LocaltransferComponent },
            { path: 'crypto-transfer', component: CryptotransferComponent },
            { path: 'loan', component: LoanComponent },
            { path: 'nft', component: NftComponent },
            { path: 'stocks', component: StocksComponent },
            { path: 'transactions', component: TransactionsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'kyc', component: KycComponent }
        ]
    }
];
