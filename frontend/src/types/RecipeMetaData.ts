export interface RecipeMetaData {
    recipeId:string
    comments:{
     id:string
     date:Date
     text:string
     userId:string
    }[]
    ratings:{
     rating:number
     userId:string
    }[]
}