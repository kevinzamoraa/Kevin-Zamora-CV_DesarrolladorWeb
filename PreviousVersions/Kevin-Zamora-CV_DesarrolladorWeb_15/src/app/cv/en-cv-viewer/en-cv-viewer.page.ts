import { Component, OnInit } from '@angular/core';
// import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-en-cv-viewer',
  templateUrl: './en-cv-viewer.page.html',
  styleUrls: ['./en-cv-viewer.page.scss'],
})
export class EnCvViewerPage implements OnInit {

  constructor() { 
    // pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit() {
  }

}
