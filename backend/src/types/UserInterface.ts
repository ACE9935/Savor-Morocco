export interface User {
    id:string
    favRecipes:[],
    recipesBooks:[],
    verificationToken?:string,
    resetPasswordToken?:string,
    photoUrl?:string
    emailVerified:boolean
    userName:string
    acceptPlcs:boolean
    email:string
}