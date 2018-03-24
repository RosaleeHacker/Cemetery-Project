import { NgModule } from '@angular/core';
import { FormUploadVegetationComponent } from './form-upload-vegetation/form-upload-vegetation';
import { FormUploadTombstoneComponent } from './form-upload-tombstone/form-upload-tombstone';
@NgModule({
	declarations: [FormUploadVegetationComponent,
    FormUploadTombstoneComponent],
	imports: [],
	exports: [FormUploadVegetationComponent,
    FormUploadTombstoneComponent]
})
export class ComponentsModule {}
