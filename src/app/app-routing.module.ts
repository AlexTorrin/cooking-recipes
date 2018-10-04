import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    { path: "cars", loadChildren: "~/app/cars/cars.module#CarsModule" },
    { path: "recipes", loadChildren: "~/app/recipes/recipes.module#RecipesModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
