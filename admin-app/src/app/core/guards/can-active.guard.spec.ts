import { TestBed } from '@angular/core/testing';

import { CanActiveGuard } from './can-active.guard';

describe('GuardGuard', () => {
  let guard: CanActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be true', () => {
    expect(guard.canActivate()).toBeTrue();
  });
});
