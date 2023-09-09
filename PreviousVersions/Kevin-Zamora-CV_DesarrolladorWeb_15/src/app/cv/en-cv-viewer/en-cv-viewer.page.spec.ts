import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnCvViewerPage } from './en-cv-viewer.page';

describe('EnCvViewerPage', () => {
  let component: EnCvViewerPage;
  let fixture: ComponentFixture<EnCvViewerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnCvViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
