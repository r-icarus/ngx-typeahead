import { TypeaheadComponent } from './typeahead.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TypeaheadComponent],
  exports: [TypeaheadComponent]
})
export class TypeaheadModule {
}
