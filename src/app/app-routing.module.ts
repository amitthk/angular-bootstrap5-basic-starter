import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextTickerComponent } from './text-ticker/text-ticker.component';

const routes: Routes = [
  {path: 'text-ticker', component: TextTickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
