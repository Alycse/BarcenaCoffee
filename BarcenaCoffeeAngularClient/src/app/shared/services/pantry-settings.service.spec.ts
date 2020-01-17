import { TestBed } from '@angular/core/testing';

import { PantrySettingsService } from './pantry-settings.service';

describe('PantrySettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PantrySettingsService = TestBed.get(PantrySettingsService);
    expect(service).toBeTruthy();
  });
});
