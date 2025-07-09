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
  page: number = 1;
  totalItems: number = 0;
  links: any[] = [];

  constructor(
    private communicatorService: CommunicatorService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loadUsers(this.page);
  }

  loadUsers(page: number): void {
    this.spinner.show();

    this.communicatorService.getProfilesService(page).subscribe({
      next: (res) => {
        this.spinner.hide();
        if (res?.data?.data) {
          this.users = res.data.data;
          this.links = res.data.links || [];
          this.totalItems = res.data.total || 0;
          this.page = page; // sync page number with result
        } else {
          this.handleError('No user data received');
        }
      },
      error: () => {
        this.spinner.hide();
        this.handleError('Failed to fetch user data');
      },
    });
  }

  approve(profileId: any): void {
    const payload = { status: 'verified' };
    this.updateKycStatus(profileId, payload, 'Approved');
  }

  reject(profileId: any): void {
    const payload = { status: 'failed' };
    this.updateKycStatus(profileId, payload, 'Rejected');
  }

  closeAccount(profileId: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action will permanently terminate the users account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, close it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // SHOW LOADER ANIMATION
        this.spinner.show();

        const payload = { status: 'Delete' };
        this.onCloseAccount(profileId, payload, 'Close');
      }
    });
  }

  private updateKycStatus(
    profileId: any,
    payload: any,
    successTitle: string
  ): void {
    this.spinner.show();
    this.communicatorService.onKYCUpdateService(payload, profileId).subscribe({
      next: (res) => {
        this.spinner.hide();
        if (res.status === true) {
          Swal.fire(successTitle, res.message, 'success');
          this.loadUsers(this.page); // reload same page
        } else {
          this.handleError(`${successTitle} failed`);
        }
      },
      error: (err) => {
        this.spinner.hide();
        this.handleError(err.error?.message || `${successTitle} failed`);
      },
    });
  }

  private onCloseAccount(
    profileId: any,
    payload: any,
    successTitle: string
  ): void {
    this.spinner.show();
    /*this.communicatorService
      .onCloseAccountService(payload, profileId)
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res.status === true) {
            Swal.fire(successTitle, res.message, 'success');
            this.loadUsers(this.page); // reload same page
          } else {
            this.handleError(`${successTitle} failed`);
          }
        },
        error: (err) => {
          this.spinner.hide();
          this.handleError(err.error?.message || `${successTitle} failed`);
        },
      });*/
  }

  // Pagination Helpers

  onPaginate(link: any): void {
    if (!link?.url) return;
    const pageNumber = this.extractPageNumber(link.url);
    if (pageNumber !== null) {
      this.loadUsers(pageNumber);
    }
  }

  extractPageNumber(url: string): number | null {
    const match = url.match(/page=(\d+)/);
    return match ? +match[1] : null;
  }

  getLink(type: 'previous' | 'next'): any {
    return this.links.find((link) => link.label.toLowerCase().includes(type));
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

  private handleError(message: string): void {
    Swal.fire('Error', message, 'error');
  }
}
