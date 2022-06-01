import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  exports: [SearchbarComponent],
})
export class FedSearchbarModule {}
