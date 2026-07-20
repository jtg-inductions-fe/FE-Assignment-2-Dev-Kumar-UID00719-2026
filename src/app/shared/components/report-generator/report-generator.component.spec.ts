import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneratorComponent } from './report-generator.component';

describe('ReportGeneratorComponent', () => {
    let component: ReportGeneratorComponent;
    let fixture: ComponentFixture<ReportGeneratorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReportGeneratorComponent],
        });
        fixture = TestBed.createComponent(ReportGeneratorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
