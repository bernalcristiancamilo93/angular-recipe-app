import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/components/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/components/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/components/recipe-item/recipe-item.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RecipesComponent } from './recipes/components/root/recipes.component';
import { ShoppingListComponent } from './shopping-list/components/root/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
