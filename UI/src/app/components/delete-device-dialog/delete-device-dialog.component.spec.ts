import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteDeviceDialogComponent} from './delete-device-dialog.component';

describe('DeleteDeviceDialogComponent', () => {
    let component: DeleteDeviceDialogComponent;
    let fixture: ComponentFixture<DeleteDeviceDialogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DeleteDeviceDialogComponent]
        });
        fixture = TestBed.createComponent(DeleteDeviceDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
