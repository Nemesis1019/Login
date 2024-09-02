import { NgModule } from "@angular/core";
import { FormComponent } from "./components/form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
    // otros módulos aquí
  ],
  exports:[FormComponent]
})
export class FormModule {

}
