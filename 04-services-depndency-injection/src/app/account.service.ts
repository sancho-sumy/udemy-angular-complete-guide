import { Injectable } from '@angular/core';
import { LogginService } from './login.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private logginService: LogginService) {}

  addAccount(name: string, status: string): void {
    this.accounts.push({ name: name, status: status });
    this.logginService.logStatusChange(status);
  }

  updateStatus(id: number, status: string): void {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
