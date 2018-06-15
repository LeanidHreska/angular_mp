import { SearchSectionModule } from './search-section.module';

describe('SearchSectionModule', () => {
  let searchSectionModule: SearchSectionModule;

  beforeEach(() => {
    searchSectionModule = new SearchSectionModule();
  });

  it('should create an instance', () => {
    expect(searchSectionModule).toBeTruthy();
  });
});
