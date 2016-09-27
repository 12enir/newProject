import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponents } from './app.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { MyPipePipe } from './my-pipe.pipe';
import { SumPipePipe } from './sum-pipe.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponents,
    UserEditorComponent,
    MyPipePipe,
    SumPipePipe,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponents]
})
export class AppModule { }
