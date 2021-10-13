import { TestBed } from '@angular/core/testing';

import { ReactiveFormResolver } from './reactive-form.resolver';

describe('ReactiveFormResolver', () => {
  let resolver: ReactiveFormResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReactiveFormResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
