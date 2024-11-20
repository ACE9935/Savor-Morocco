import { Ingredient } from "./Recipe"
import { RecipeBook } from "./RecipeBook"
import { ShoppingList } from "./ShoppingList"

export interface User {
    id:string
    favRecipes:string[],
    joinDate:Date
    recipesBooks:RecipeBook[],
    ratings:{recipeId:string,rating:number}[]
    shoppingList:ShoppingList[]
    comments:{
        id:string
        text:string
        date:Date
        recipeId:string
     }[]
    verificationToken?:string,
    resetPasswordToken?:string,
    photoUrl?:string
    emailVerified:boolean
    userName:string
    acceptPlcs:boolean
    email:string
}