import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsCvViewerPage } from './es-cv-viewer.page';

describe('EsCvViewerPage', () => {
  let component: EsCvViewerPage;
  let fixture: ComponentFixture<EsCvViewerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsCvViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
