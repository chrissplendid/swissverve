import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DepositComponent } from './deposit/deposit.component';
import { InternaltransferComponent } from './internaltransfer/internaltransfer.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: '', component: AnalyticsComponent },
            { path: 'deposit', component: DepositComponent },
            { path: 'internal-transfer', component: InternaltransferComponent }
        ]
    }
];
