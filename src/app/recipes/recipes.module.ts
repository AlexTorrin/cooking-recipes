import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { RecipeListComponent } from "~/app/recipes/recipe-list.component";
import { RecipesRoutingModule } from "~/app/recipes/recipes-routing.module";

@NgModule({
    imports: [
        RecipesRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        RecipeListComponent
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class RecipesModule { }
