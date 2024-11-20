export interface Recipe {
    id:string
    name:string
    title:string
    imgUrl:string
    type:RecipeType
    difficulty:"Very easy"|"Easy"|"Average"|"Above average"
    prepTime:string
    cookTime:string
    serving:number
    cost:"Very low" | "Low" | "Average" | "Above average"
    presentation:string
    ingredients:Ingredient[]
    nutritionalValue:NutritionalValues
    preparationInfos:string
    storageInfos:string
    tips:string[]
}

export type RecipeType = "Appetizer" | "Main Course" | "Dessert" | "Beverage"

export interface Ingredient {
    name:string
    quantity:string
    notIncluded?:boolean
}

export interface NutritionalValues {
    calories:number,
    values:{
     energy:number,
     carbohydrates:number
     protein:number
     fats:number
     fiber:number
     cholesterol:number
     sodium:number
    }
}