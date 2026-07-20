import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTemplateComponent } from './error-template.component';

describe('ErrorTemplateComponent', () => {
    let component: ErrorTemplateComponent;
    let fixture: ComponentFixture<ErrorTemplateComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorTemplateComponent],
        });
        fixture = TestBed.createComponent(ErrorTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
