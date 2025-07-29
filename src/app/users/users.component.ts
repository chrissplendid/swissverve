import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, NgxSpinnerModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  page = 1;
  totalItems = 0;
  links: any[] = [];

  constructor(
    private communicatorService: CommunicatorService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loadUsers(this.page);
  }

  // ✅ Get only active users
  get activeUsers() {
    return this.users.filter(user => user.user !== null);
  }

  // ✅ Pagination controls
  onPaginate(link: any): void {
    const pageNumber = this.extractPageNumber(link?.url);
    if (pageNumber) this.loadUsers(pageNumber);
  }

  getLink(type: 'previous' | 'next'): any {
    return this.links.find(link =>
      link.label.toLowerCase().includes(type)
    );
  }

  isNavControl(label: string): boolean {
    const lower = label.toLowerCase();
    return lower.includes('previous') || lower.includes('next');
  }

  parseLabel(label: string): string {
    if (label.toLowerCase().includes('previous')) return '&laquo;';
    if (label.toLowerCase().includes('next')) return '&raquo;';
    return label;
  }

  // ✅ KYC Actions
  approve(profileId: any): void {
    this.updateStatus(profileId, { status: 'verified' }, 'Approved');
  }

  reject(profileId: any): void {
    this.updateStatus(profileId, { status: 'failed' }, 'Rejected');
  }

  closeAccount(profileId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action will permanently terminate the user’s account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, close it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        this.updateStatus(profileId, { status: 'delete' }, 'Account Closed', true);
      }
    });
  }

  // ✅ Core: Load Users
  private loadUsers(page: number): void {
    this.showSpinner();
    this.communicatorService.getProfilesService(page).subscribe({
      next: res => {
        this.hideSpinner();
        if (res?.data?.data) {
          this.users = res.data.data;
          this.links = res.data.links || [];
          this.totalItems = res.data.total || 0;
          this.page = page;
        } else {
          this.showError('No user data received');
        }
      },
      error: () => {
        this.hideSpinner();
        this.showError('Failed to fetch user data');
      },
    });
  }

  // ✅ Core: Update Status (reused for approve, reject, close)
  private updateStatus(
    profileId: any,
    payload: any,
    successTitle: string,
    isClose = false
  ): void {
    this.showSpinner();

    const request$ = isClose
      ? this.communicatorService.onCloseAccountService(profileId)
      : this.communicatorService.onKYCUpdateService(payload, profileId);

    request$.subscribe({
      next: res => {
        this.hideSpinner();
        if (res.status === true) {
          this.showSuccess(successTitle, res.message);
          this.loadUsers(this.page);
        } else {
          this.showError(`${successTitle} failed`);
        }
      },
      error: err => {
        this.hideSpinner();
        this.showError(err.error?.message || `${successTitle} failed`);
      },
    });
  }

  // ✅ Utility
  private extractPageNumber(url: string): number | null {
    const match = url?.match(/page=(\d+)/);
    return match ? +match[1] : null;
  }

  private showError(message: string): void {
    Swal.fire('Error', message, 'error');
  }

  private showSuccess(title: string, message: string): void {
    Swal.fire(title, message, 'success');
  }

  private showSpinner(): void {
    this.spinner.show();
  }

  private hideSpinner(): void {
    this.spinner.hide();
  }
}
