import { NgModule } from "@angular/core";

import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatToolbarModule } from "@angular/material/toolbar"

const matModules: any[] = [
    MatFormFieldModule, MatInputModule, 
    MatGridListModule, MatButtonModule,
    MatToolbarModule
]

@NgModule({
    imports: matModules,
    exports: matModules
})

export class MaterialModule { }