import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListCardComponent } from './data-list-card.component';

describe('DataListCardComponent', () => {
    let component: DataListCardComponent;
    let fixture: ComponentFixture<DataListCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DataListCardComponent],
        });
        fixture = TestBed.createComponent(DataListCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
