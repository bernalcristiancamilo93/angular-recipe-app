import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Blueberry Desert',
      'Tasty desert to enjoy with friends.',
      'https://images.squarespace-cdn.com/content/v1/5190d201e4b0e86c59643db1/4199a15b-4eb2-4d60-b5dc-2831e47b8b8f/frbreakfast_vegan_healthy_eat-image-kybe8oy8.jpg'
    ),
    new Recipe(
      'Mushroom Pasta',
      'Great pasta dish for a romantic dinner night.',
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/Creamy_Mushroom_Pasta.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
