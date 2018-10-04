import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RecipeListComponent } from "~/app/recipes/recipe-list.component";

const routes: Routes = [
    { path: "", component: RecipeListComponent }
    // { path: "recipe-detail/:id", component: CarDetailComponent },
    // { path: "recipe-detail-edit/:id", component: CarDetailEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RecipesRoutingModule { }
