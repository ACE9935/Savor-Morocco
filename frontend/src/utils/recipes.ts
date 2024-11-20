import { Recipe } from "../types/Recipe";

export const recipes:Recipe[] = [
    {
      id: "1",
      title: "Chicken Tagine with Preserved Lemons and Olives",
      name:"Chicken Tagine",
      imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-1.jpg?alt=media&token=02d32a46-9329-4fde-b3f9-48ad6ac5ec90",
      type: "Main Course",
      difficulty: "Average",
      prepTime: "20 mins",
      cookTime: "1 hr 30 mins",
      serving: 4,
      cost: "Average",
      presentation: "This Chicken Tagine is a Moroccan classic, marrying the vibrant flavors of preserved lemons, green olives, and a mix of aromatic spices. The slow-cooked chicken becomes tender and succulent, absorbing the tangy, salty notes of the olives and lemons. Served with warm bread or couscous, this dish is deeply satisfying and brings the authentic taste of Morocco to your table.",
      ingredients: [
        { name: "Chicken", quantity: "1 whole, cut into pieces" },
        { name: "Preserved lemons", quantity: "1, quartered" },
        { name: "Green olives", quantity: "1 cup" },
        { name: "Onion", quantity: "1 large, finely chopped" },
        { name: "Garlic", quantity: "3 cloves, minced" },
        { name: "Olive oil", quantity: "3 tbsp" },
        { name: "Ground ginger", quantity: "1 tsp" },
        { name: "Turmeric", quantity: "1 tsp" },
        { name: "Ground cumin", quantity: "1/2 tsp" },
        { name: "Fresh cilantro", quantity: "1/4 cup, chopped" },
        { name: "Salt and pepper", quantity: "to taste" },
      ],
      nutritionalValue: {
        calories: 450,
        values: {
          energy: 450,
          carbohydrates: 15,
          protein: 35,
          fats: 30,
          fiber: 5,
          cholesterol: 90,
          sodium: 900
        }
      },
      preparationInfos: "In a large tagine or heavy pot, heat olive oil and add the onions, cooking until softened. Add garlic, ground ginger, turmeric, and cumin, stirring to coat the onions in spices. Add the chicken pieces, turning to brown them lightly on all sides. Once browned, add preserved lemon quarters, green olives, salt, and pepper. Add a small amount of water, cover, and let simmer on low heat for 1-1.5 hours, until the chicken is tender and the flavors are well-blended. Garnish with fresh cilantro before serving.",
      storageInfos: "Can be refrigerated for up to 3 days; reheat slowly to retain flavor.",
      tips: ["Serve with warm Moroccan bread to soak up the sauce."]
    },
    {
      id: "2",
      title: "Harira Soup",
      name:"Harira",
      imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-2.jpg?alt=media&token=77cc79f7-b141-4fba-95d5-a1e51e43f1f5",
      type: "Appetizer",
      difficulty: "Easy",
      prepTime: "15 mins",
      cookTime: "1 hr",
      serving: 6,
      cost: "Low",
      presentation: "Harira is a beloved Moroccan soup, especially popular during Ramadan to break the fast. This hearty soup combines tomatoes, lentils, chickpeas, and spices, creating a warm, comforting, and nutrient-rich dish. The complex flavors come from the unique blend of spices, fresh herbs, and the tang of tomatoes, making each spoonful deeply satisfying and aromatic.",
      ingredients: [
        { name: "Tomatoes", quantity: "2 large, diced" },
        { name: "Green lentils", quantity: "1 cup" },
        { name: "Chickpeas", quantity: "1/2 cup, soaked" },
        { name: "Onion", quantity: "1 large, chopped" },
        { name: "Celery", quantity: "2 stalks, chopped" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Fresh cilantro", quantity: "1/4 cup, chopped" },
        { name: "Ground ginger", quantity: "1/2 tsp" },
        { name: "Ground cinnamon", quantity: "1/2 tsp" },
        { name: "Salt and pepper", quantity: "to taste" },
      ],
      nutritionalValue: {
        calories: 200,
        values: {
          energy: 200,
          carbohydrates: 35,
          protein: 10,
          fats: 6,
          fiber: 8,
          cholesterol: 0,
          sodium: 500
        }
      },  
      preparationInfos: "In a large pot, heat olive oil and sauté onions and celery until softened. Add tomatoes, ginger, and cinnamon, stirring well. Add lentils, chickpeas, and water to cover ingredients. Simmer for 45 minutes, stirring occasionally, until chickpeas are tender. Season with salt and pepper, add fresh cilantro, and serve hot. This soup thickens as it cools, so add water when reheating if needed.",
      storageInfos: "Can be stored in the refrigerator for up to 3 days.",
      tips: ["Add a squeeze of lemon before serving to enhance flavor."]
    },
    {
      id: "3",
      title: "Moroccan Mint Tea",
      name:"Mint Tea",
      imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-3.webp?alt=media&token=4c6899b1-7b22-4260-8f6a-f0998845e63c",
      type: "Beverage",
      difficulty: "Very easy",
      prepTime: "5 mins",
      cookTime: "5 mins",
      serving: 4,
      cost: "Very low",
      presentation: "Moroccan Mint Tea is an essential part of Moroccan hospitality. This refreshing drink is made by steeping green tea with fresh mint leaves and a generous amount of sugar. Each sip provides a balance of earthy, fresh, and sweet flavors, making it an ideal drink to enjoy with family and friends. It is traditionally poured from a height to create a light froth on top.",
      ingredients: [
        { name: "Green tea", quantity: "2 tbsp" },
        { name: "Fresh mint leaves", quantity: "1 large handful" },
        { name: "Sugar", quantity: "to taste" },
        { name: "Boiling water", quantity: "4 cups" },
      ],
      nutritionalValue: {
        calories: 40,
        values: {
          energy: 40,
          carbohydrates: 10,
          protein: 0,
          fats: 0,
          fiber: 0,
          cholesterol: 0,
          sodium: 2
        }
      },
      preparationInfos: "In a teapot, add green tea and a small amount of boiling water, swishing it around to rinse the leaves. Discard the water. Add fresh mint leaves and sugar to the pot. Fill with boiling water and let steep for 3-5 minutes. Pour from a height into small glasses, then pour back into the pot and repeat a few times to mix well. Serve hot and enjoy.",
      storageInfos: "Best served immediately; do not store.",
      tips: ["Use more mint leaves for a stronger mint flavor."]
    },
    {
      id: "4",
      title: "Couscous with Seven Vegetables",
      name:"Couscous",
      imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-4.jpg?alt=media&token=d40358f0-e08d-4626-815b-7a794db84d56",
      type: "Main Course",
      difficulty: "Above average",
      prepTime: "30 mins",
      cookTime: "1 hr",
      serving: 6,
      cost: "Average",
      presentation: "This traditional couscous dish is a Moroccan staple, often served at family gatherings and celebrations. The couscous is steamed to a fluffy perfection, while a variety of vegetables are cooked in a seasoned broth until tender. The result is a beautifully layered and aromatic dish that captures the heart of Moroccan cuisine. Served with meat or as a vegetarian option, it’s versatile and deeply satisfying.",
      ingredients: [
        { name: "Couscous", quantity: "3 cups" },
        { name: "Carrots", quantity: "2, sliced" },
        { name: "Zucchini", quantity: "2, sliced" },
        { name: "Turnip", quantity: "1, diced" },
        { name: "Potatoes", quantity: "2, diced" },
        { name: "Pumpkin", quantity: "1 cup, cubed" },
        { name: "Chickpeas", quantity: "1 cup, soaked" },
        { name: "Olive oil", quantity: "2 tbsp" },
        { name: "Ground turmeric", quantity: "1 tsp" },
        { name: "Salt and pepper", quantity: "to taste" },
      ],
      nutritionalValue: {
        calories: 350,
        values: {
          energy: 350,
          carbohydrates: 70,
          protein: 10,
          fats: 5,
          fiber: 10,
          cholesterol: 0,
          sodium: 300
        }
      },
      preparationInfos: "In a large pot, heat olive oil and sauté all vegetables briefly. Add turmeric, salt, and pepper, and cover with water. Simmer for 45 minutes, until vegetables are tender. Meanwhile, steam the couscous in a couscoussier or over a pot of boiling water, fluffing every 10 minutes until light and soft. Serve vegetables over couscous, drizzling with the broth.",
      storageInfos: "Store in an airtight container in the refrigerator for up to 3 days.",
      tips: ["Add a sprinkle of cinnamon for a touch of sweetness."]
    },
    {
      id: "5",
      title: "M'hancha, Almond Pastry",
      name:"M'hancha",
      imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-5.jpg?alt=media&token=e75ff687-9e2a-4824-a240-cdd88916527b",
      type: "Dessert",
      difficulty: "Average",
      prepTime: "20 mins",
      cookTime: "30 mins",
      serving: 8,
      cost: "Above average",
      presentation: "M'hancha, or Moroccan snake cake, is a visually stunning dessert made with a delicate almond filling wrapped in thin layers of pastry. Shaped like a coiled snake, this pastry is golden and crisp on the outside, with a fragrant, nutty interior. It’s an impressive dessert that’s perfect for special occasions or as a delightful end to a Moroccan meal.",
      ingredients: [
        { name: "Almond flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1/2 cup" },
        { name: "Butter", quantity: "1/4 cup, melted" },
        { name: "Orange blossom water", quantity: "1 tbsp" },
        { name: "Phyllo dough", quantity: "6 sheets" },
        { name: "Egg yolk", quantity: "1, beaten" },
      ],
      nutritionalValue: {
        calories: 300,
        values: {
          energy: 300,
          carbohydrates: 40,
          protein: 5,
          fats: 15,
          fiber: 3,
          cholesterol: 30,
          sodium: 120
        }
      },
      preparationInfos: "In a bowl, combine almond flour, sugar, melted butter, and orange blossom water to create a thick paste. Lay out a sheet of phyllo dough, brush with melted butter, and spread a strip of almond mixture along the edge. Roll into a log and shape into a coil on a baking sheet. Repeat with remaining phyllo and almond mixture, connecting each piece to form a larger coil. Brush with egg yolk and bake at 180°C (350°F) for 30 minutes or until golden.",
      storageInfos: "Store in an airtight container at room temperature for up to 3 days.",
      tips: ["Serve with a dusting of powdered sugar and a sprinkle of cinnamon."]
    },
    {
        id: "6",
        title: "Briouats with Ground Meat",
        name:"Briouats",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-6.jpg?alt=media&token=348b07b5-4fa2-4c54-96fb-ed27cf15f494",
        type: "Appetizer",
        difficulty: "Average",
        prepTime: "30 mins",
        cookTime: "20 mins",
        serving: 6,
        cost: "Average",
        presentation: "Briouats are crispy Moroccan pastries typically filled with a flavorful mixture of spiced ground meat. Wrapped in delicate warqa pastry or phyllo, these triangular treats are deep-fried until golden brown and served as appetizers or snacks. The flaky pastry paired with the seasoned filling makes them a popular choice at gatherings and special occasions.",
        ingredients: [
          { name: "Ground beef or lamb", quantity: "500g" },
          { name: "Onion", quantity: "1, finely chopped" },
          { name: "Cilantro", quantity: "1/4 cup, chopped" },
          { name: "Ground cinnamon", quantity: "1/2 tsp" },
          { name: "Ground cumin", quantity: "1/2 tsp" },
          { name: "Ground ginger", quantity: "1/2 tsp" },
          { name: "Egg", quantity: "1, beaten" },
          { name: "Warqa or phyllo dough", quantity: "12 sheets" },
          { name: "Olive oil", quantity: "for frying" },
        ],
        nutritionalValue: {
          calories: 250,
          values: {
            energy: 250,
            carbohydrates: 20,
            protein: 12,
            fats: 15,
            fiber: 2,
            cholesterol: 45,
            sodium: 400
          }
        },
        preparationInfos: "In a skillet, cook the ground meat with onions until browned, then mix in cilantro, cinnamon, cumin, ginger, salt, and pepper. Let the mixture cool slightly, then add the beaten egg. Cut the pastry sheets into strips, place a spoonful of filling on each strip, and fold into triangles. Fry in hot olive oil until golden brown and crispy. Serve warm.",
        storageInfos: "Best served fresh; can be refrigerated for up to 2 days and reheated in an oven.",
        tips: ["Serve with a squeeze of lemon or dipping sauce for extra flavor."]
      },
      {
        id: "7",
        title: "Moroccan Lamb Kefta Tagine",
        name:"Lamb Kefta Tagine",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-ff.webp?alt=media&token=afd00a18-112a-45e2-a02c-62e084215b13",
        type: "Main Course",
        difficulty: "Above average",
        prepTime: "25 mins",
        cookTime: "1 hr",
        serving: 4,
        cost: "Above average",
        presentation: "This Lamb Kefta Tagine features flavorful meatballs cooked in a spiced tomato sauce and topped with poached eggs. The combination of juicy lamb kefta, aromatic herbs, and spices makes for a delicious, hearty meal. This tagine is often served directly from the cooking vessel, inviting everyone to gather around and enjoy together.",
        ingredients: [
          { name: "Ground lamb", quantity: "500g" },
          { name: "Fresh parsley", quantity: "1/4 cup, chopped" },
          { name: "Ground cumin", quantity: "1 tsp" },
          { name: "Paprika", quantity: "1 tsp" },
          { name: "Tomatoes", quantity: "4, diced" },
          { name: "Garlic", quantity: "2 cloves, minced" },
          { name: "Eggs", quantity: "2" },
          { name: "Olive oil", quantity: "2 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 500,
          values: {
            energy: 500,
            carbohydrates: 10,
            protein: 30,
            fats: 40,
            fiber: 3,
            cholesterol: 100,
            sodium: 800
          },
        },
        preparationInfos: "In a bowl, mix ground lamb with parsley, cumin, salt, and pepper. Form small meatballs and set aside. Heat olive oil in a tagine or pot, add garlic and tomatoes, and cook until soft. Add the meatballs and simmer in the sauce for 20-30 minutes. Crack eggs over the top, cover, and cook until eggs are set. Serve hot with bread.",
        storageInfos: "Store in the refrigerator for up to 3 days; reheat on the stove.",
        tips: ["Use fresh herbs to enhance the flavor of the lamb kefta."]
      },
      {
        id: "8",
        title: "Baghrir, Moroccan Pancakes",
        name:"Baghrir",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-8.webp?alt=media&token=084fcc69-834e-4f8a-a0fd-b274ad914c2e",
        type: "Dessert",
        difficulty: "Easy",
        prepTime: "15 mins",
        cookTime: "20 mins",
        serving: 4,
        cost: "Very low",
        presentation: "Baghrir, also known as Moroccan pancakes or 'thousand hole' pancakes, are light and spongy with a unique honeycomb texture. These pancakes are perfect for breakfast or dessert, typically served warm with melted butter and honey. The texture allows the honey-butter mixture to soak through, making each bite delightfully sweet and moist.",
        ingredients: [
          { name: "Semolina flour", quantity: "1 cup" },
          { name: "All-purpose flour", quantity: "1/4 cup" },
          { name: "Yeast", quantity: "1 tsp" },
          { name: "Warm water", quantity: "1.5 cups" },
          { name: "Salt", quantity: "1/2 tsp" },
          { name: "Sugar", quantity: "1 tsp" },
        ],
        nutritionalValue: {
          calories: 150,
          values: {
            energy: 150,
            carbohydrates: 30,
            protein: 3,
            fats: 2,
            fiber: 1,
            cholesterol: 10,
            sodium: 120
          }
        },
        preparationInfos: "In a blender, mix semolina, flour, yeast, sugar, salt, and warm water until smooth. Let the batter rest for 15 minutes. Heat a non-stick pan and pour batter to form small pancakes. Cook until bubbles form on the surface and no longer pop, without flipping. Serve warm with butter and honey.",
        storageInfos: "Best served fresh; can be kept in an airtight container for a day.",
        tips: ["For extra flavor, add a dash of orange blossom water to the batter."]
      },
      {
        id: "9",
        title: "Rfissa",
        name:"Rfissa",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-9.jpg?alt=media&token=006d12a4-ecb1-482b-83a4-4ff3cd02f90d",
        type: "Main Course",
        difficulty: "Above average",
        prepTime: "30 mins",
        cookTime: "2 hrs",
        serving: 6,
        cost: "Above average",
        presentation: "Rfissa is a comforting Moroccan dish often served at celebrations or family gatherings. It combines tender, spiced chicken, lentils, and msemmen (layered flatbread) in a richly seasoned broth. This dish has a wonderful depth of flavor and is typically enjoyed as a communal meal, where pieces of msemmen soak up the broth and flavors from the chicken and lentils.",
        ingredients: [
          { name: "Whole chicken", quantity: "1, cut into pieces" },
          { name: "Lentils", quantity: "1 cup" },
          { name: "Onion", quantity: "2 large, sliced" },
          { name: "Ground fenugreek", quantity: "1 tsp" },
          { name: "Ground turmeric", quantity: "1 tsp" },
          { name: "Fresh coriander", quantity: "1/4 cup, chopped" },
          { name: "Msemmen", quantity: "6 pieces" },
          { name: "Olive oil", quantity: "3 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 600,
          values: {
            energy: 600,
            carbohydrates: 50,
            protein: 25,
            fats: 35,
            fiber: 8,
            cholesterol: 110,
            sodium: 700
          }
        },
        preparationInfos: "In a large pot, heat olive oil and cook onions until soft. Add chicken pieces, fenugreek, turmeric, salt, and pepper, stirring to coat. Pour in water to cover, add lentils, and let simmer for about 1.5 hours until chicken is tender. Lay pieces of msemmen on a serving platter, place chicken and lentils on top, and pour broth over everything. Garnish with coriander.",
        storageInfos: "Refrigerate for up to 3 days; reheat with additional broth if necessary.",
        tips: ["Use freshly made msemmen for the best texture and flavor."]
      },
      {
        id: "10",
        title: "Sellou, Sesame and Almond Snack",
        name:"Sellou",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-10.webp?alt=media&token=8ed86197-f461-4e1f-82ec-cf17cef88cd7",
        type: "Dessert",
        difficulty: "Average",
        prepTime: "30 mins",
        cookTime: "15 mins",
        serving: 8,
        cost: "Low",
        presentation: "Sellou is a traditional Moroccan dessert, often prepared during Ramadan and special occasions. Made from roasted almonds, sesame seeds, and flour, it has a nutty, slightly sweet flavor with a crumbly, powdery texture. Sellou is rich in flavor and often shaped into small mounds or pressed into a dish for serving.",
        ingredients: [
          { name: "Flour", quantity: "2 cups" },
          { name: "Almonds", quantity: "1 cup, roasted and ground" },
          { name: "Sesame seeds", quantity: "1 cup, roasted and ground" },
          { name: "Honey", quantity: "1/2 cup" },
          { name: "Butter", quantity: "1/4 cup, melted" },
          { name: "Ground cinnamon", quantity: "1 tsp" },
          { name: "Sugar", quantity: "1/4 cup" },
        ],
        nutritionalValue: {
          calories: 300,
          values: {
            energy: 300,
            carbohydrates: 35,
            protein: 5,
            fats: 15,
            fiber: 3,
            cholesterol: 0,
            sodium: 20
          }
        },
        preparationInfos: "In a pan, toast flour over medium heat until golden and fragrant. Let it cool, then mix with ground almonds, sesame seeds, cinnamon, sugar, honey, and melted butter until well combined. Shape into small mounds or press into a shallow dish. Serve at room temperature as a snack or dessert.",
        storageInfos: "Store in an airtight container at room temperature for up to 1 week.",
        tips: ["Add extra cinnamon or ground anise for a unique flavor twist."]
      },
      {
        id: "11",
        title: "Mrouzia, Lamb with Raisins",
        name:"Mrouzia",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-mrouzia.jpg?alt=media&token=1523c742-4762-42a8-98b1-9ef5047efe64",
        type: "Main Course",
        difficulty: "Above average",
        prepTime: "40 mins",
        cookTime: "2 hrs",
        serving: 4,
        cost: "Above average",
        presentation: "Mrouzia is a special Moroccan dish that combines lamb with the sweetness of raisins, almonds, and a beautiful mix of spices. It’s a dish often served at large family gatherings or during festive occasions. The tender lamb, infused with honey and spices, is slow-cooked to perfection, and the raisins and almonds add a delightful sweetness and texture that complements the savory meat.",
        ingredients: [
          { name: "Lamb shoulder or leg", quantity: "500g, cut into chunks" },
          { name: "Onion", quantity: "1, chopped" },
          { name: "Raisins", quantity: "1/2 cup" },
          { name: "Almonds", quantity: "1/4 cup, toasted" },
          { name: "Ground cinnamon", quantity: "1 tsp" },
          { name: "Ground ginger", quantity: "1 tsp" },
          { name: "Honey", quantity: "3 tbsp" },
          { name: "Ground turmeric", quantity: "1/2 tsp" },
          { name: "Coriander", quantity: "1/4 cup, chopped" },
          { name: "Olive oil", quantity: "2 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 550,
          values: {
            energy: 550,
            carbohydrates: 25,
            protein: 30,
            fats: 40,
            fiber: 4,
            cholesterol: 95,
            sodium: 600
          }
        },
        preparationInfos: "In a tagine or heavy pot, heat olive oil and sauté onions until soft. Add the lamb and brown on all sides. Mix in cinnamon, ginger, turmeric, salt, and pepper. Add enough water to cover the meat, and simmer for 1.5 to 2 hours, until the lamb is tender. Add raisins and honey, and continue cooking for an additional 10 minutes. Garnish with toasted almonds and fresh coriander. Serve with couscous or Moroccan bread.",
        storageInfos: "Refrigerate for up to 3 days; reheat gently on the stovetop.",
        tips: ["For a deeper flavor, allow the dish to sit for an hour before serving to allow the spices to fully infuse."]
      },
      {
        id: "12",
        title: "Zaalouk, Eggplant and Tomato Salad",
        name:"Zaalouk",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-12.jpg?alt=media&token=2f83134b-dbc3-443f-ac77-c8fffbb9573b",
        type: "Appetizer",
        difficulty: "Easy",
        prepTime: "15 mins",
        cookTime: "25 mins",
        serving: 4,
        cost: "Low",
        presentation: "Zaalouk is a popular Moroccan salad made with roasted eggplant and tomatoes, giving it a smoky flavor that’s balanced with the earthy spices of cumin and paprika. This dish is often served as a side or appetizer and is typically enjoyed with warm, crusty Moroccan bread. The combination of tender eggplant and tangy tomatoes creates a satisfying, healthy dish that is both comforting and flavorful.",
        ingredients: [
          { name: "Eggplant", quantity: "2, diced" },
          { name: "Tomatoes", quantity: "4, chopped" },
          { name: "Garlic", quantity: "3 cloves, minced" },
          { name: "Ground cumin", quantity: "1 tsp" },
          { name: "Ground paprika", quantity: "1 tsp" },
          { name: "Olive oil", quantity: "2 tbsp" },
          { name: "Fresh parsley", quantity: "1/4 cup, chopped" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 150,
          values: {
            energy: 150,
            carbohydrates: 10,
            protein: 2,
            fats: 10,
            fiber: 4,
            cholesterol: 0,
            sodium: 200
          }
        },
        preparationInfos: "Preheat the oven to 200°C (400°F). Place the diced eggplant on a baking sheet, drizzle with olive oil, and roast for 20 minutes, turning halfway through. Meanwhile, heat some olive oil in a pan and sauté garlic until fragrant. Add chopped tomatoes, cumin, paprika, salt, and pepper. Cook for 10-15 minutes until the tomatoes break down into a sauce. Add the roasted eggplant to the tomato mixture and stir. Simmer for 5 minutes to combine the flavors, then garnish with fresh parsley. Serve warm or at room temperature.",
        storageInfos: "Store in an airtight container in the refrigerator for up to 2 days.",
        tips: ["Add a squeeze of lemon juice just before serving for a fresh burst of flavor."]
      },
      {
        id: "13",
        title: "Bastilla, Chicken Pie",
        name:"Bastilla",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-13.jpg?alt=media&token=63b5539b-d254-41b6-9d86-301bf2bc954e",
        type: "Main Course",
        difficulty: "Above average",
        prepTime: "1 hr",
        cookTime: "1 hr",
        serving: 6,
        cost: "Above average",
        presentation: "Bastilla is one of Morocco’s most iconic dishes, combining savory chicken, eggs, and almonds wrapped in a crisp pastry shell. Traditionally served at celebrations and festive occasions, it is both flavorful and visually impressive. The delicate pastry shell contrasts beautifully with the rich, spiced chicken filling, creating a dish that is both light and hearty.",
        ingredients: [
          { name: "Chicken thighs", quantity: "4, boneless and skinless" },
          { name: "Onion", quantity: "1, finely chopped" },
          { name: "Ground cinnamon", quantity: "1 tsp" },
          { name: "Ground ginger", quantity: "1 tsp" },
          { name: "Saffron threads", quantity: "a pinch, soaked in warm water" },
          { name: "Almonds", quantity: "1/4 cup, toasted and ground" },
          { name: "Eggs", quantity: "4, beaten" },
          { name: "Phyllo dough", quantity: "12 sheets" },
          { name: "Butter", quantity: "4 tbsp, melted" },
          { name: "Sugar", quantity: "2 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 450,
          values: {
            energy: 450,
            carbohydrates: 35,
            protein: 20,
            fats: 25,
            fiber: 3,
            cholesterol: 75,
            sodium: 500
          }
        },
        preparationInfos: "Cook the chicken with onions, spices, and saffron in a pot until tender, then shred the chicken. In a separate pan, cook the eggs and mix with the shredded chicken, ground almonds, and sugar. Lay phyllo dough in a pie dish, brushing each layer with melted butter. Fill with the chicken mixture and fold over the dough. Bake at 180°C (350°F) for 30 minutes until golden brown. Dust with powdered sugar and cinnamon before serving.",
        storageInfos: "Store in an airtight container in the refrigerator for up to 3 days. Reheat in the oven.",
        tips: ["For a more authentic flavor, use chicken cooked with preserved lemon."]
      },
      {
        id: "14",
        title: "Makouda, Potato Fritters",
        name:"Makouda",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-14.jpg?alt=media&token=503c4c23-2c44-4c4a-8a81-b11a44e874aa",
        type: "Appetizer",
        difficulty: "Easy",
        prepTime: "20 mins",
        cookTime: "15 mins",
        serving: 4,
        cost: "Low",
        presentation: "Makouda is a Moroccan street food classic, made from mashed potatoes, herbs, and spices. The fritters are golden brown and crispy on the outside, with a soft and flavorful center. These tasty bites are often served as a snack or appetizer, and their warm, comforting flavor is beloved by many.",
        ingredients: [
          { name: "Potatoes", quantity: "4, peeled and boiled" },
          { name: "Garlic", quantity: "2 cloves, minced" },
          { name: "Ground cumin", quantity: "1 tsp" },
          { name: "Ground coriander", quantity: "1 tsp" },
          { name: "Fresh parsley", quantity: "1/4 cup, chopped" },
          { name: "Egg", quantity: "1" },
          { name: "Breadcrumbs", quantity: "1/2 cup" },
          { name: "Olive oil", quantity: "for frying" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 200,
          values: {
            energy: 200,
            carbohydrates: 25,
            protein: 3,
            fats: 10,
            fiber: 3,
            cholesterol: 10,
            sodium: 300
          }
        },
        preparationInfos: "Mash the boiled potatoes in a bowl. Add minced garlic, cumin, coriander, parsley, salt, and pepper, and mix well. Beat the egg and add it to the potato mixture. Shape the mixture into small round fritters and coat them with breadcrumbs. Heat olive oil in a frying pan over medium heat. Fry the fritters in batches, turning them until golden brown and crispy on all sides. Drain on paper towels and serve hot.",
        storageInfos: "Store any leftover makouda in an airtight container in the refrigerator for up to 2 days. Reheat in the oven for best results.",
        tips: ["Serve makouda with a side of harissa sauce or a garlic yogurt dip."]
      },
      {
        id: "15",
        title: "Tagine of Lamb with Prunes",
        name:"Tagine of Lamb with Prunes",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Flamb-tagine-2.jpg?alt=media&token=df151abe-2b66-4bde-af3f-d1123a3d5f6e",
        type: "Main Course",
        difficulty: "Above average",
        prepTime: "20 mins",
        cookTime: "2 hrs",
        serving: 6,
        cost: "Above average",
        presentation: "This traditional Moroccan tagine combines the rich, savory flavor of lamb with the sweetness of prunes. Slow-cooked in a tagine, the lamb becomes tender, while the sauce, infused with spices like cinnamon and saffron, coats the prunes and the meat. Served with couscous or fresh bread, this dish is perfect for a celebratory meal, offering a balance of sweet and savory flavors that are a hallmark of Moroccan cuisine.",
        ingredients: [
          { name: "Lamb shoulder", quantity: "1.5 kg, cut into pieces" },
          { name: "Prunes", quantity: "200g" },
          { name: "Onion", quantity: "1, chopped" },
          { name: "Cinnamon stick", quantity: "1" },
          { name: "Ground ginger", quantity: "1 tsp" },
          { name: "Ground cinnamon", quantity: "1 tsp" },
          { name: "Saffron", quantity: "a pinch, soaked in warm water" },
          { name: "Honey", quantity: "2 tbsp" },
          { name: "Olive oil", quantity: "2 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 500,
          values: {
            energy: 500,
            carbohydrates: 20,
            protein: 30,
            fats: 35,
            fiber: 5,
            cholesterol: 85,
            sodium: 650
          }
        },
        preparationInfos: "In a tagine or large pot, heat olive oil over medium heat. Brown the lamb pieces on all sides. Add chopped onion and cook until softened. Sprinkle ground ginger, ground cinnamon, and salt over the lamb. Add saffron water and enough water to cover the lamb. Bring to a boil, then lower the heat and simmer for 1.5 hours, until the lamb is tender. Add the prunes and honey and continue cooking for another 30 minutes, allowing the sauce to reduce and thicken. Serve the lamb and prunes hot with couscous or bread.",
        storageInfos: "Store leftovers in the refrigerator for up to 3 days. Reheat on the stovetop, adding a bit of water if necessary.",
        tips: ["For extra flavor, garnish with toasted almonds or sesame seeds."]
      },
      {
        id: "16",
        title: "Sfenj, Moroccan Doughnuts",
        name:"Sfenj",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-15.webp?alt=media&token=b07c0f4d-e810-487a-8d43-86db85768546",
        type: "Dessert",
        difficulty: "Easy",
        prepTime: "10 mins",
        cookTime: "20 mins",
        serving: 4,
        cost: "Low",
        presentation: "Sfenj are traditional Moroccan doughnuts that are deep-fried to golden perfection and coated in powdered sugar. Soft and airy on the inside with a crispy, sugary crust, these doughnuts are enjoyed as a sweet snack with tea or coffee. Their simple, comforting taste has made them a favorite in Moroccan street food culture.",
        ingredients: [
          { name: "Flour", quantity: "2 cups" },
          { name: "Yeast", quantity: "1 tsp" },
          { name: "Sugar", quantity: "2 tbsp" },
          { name: "Salt", quantity: "1/2 tsp" },
          { name: "Warm water", quantity: "1 cup" },
          { name: "Olive oil", quantity: "for frying" },
          { name: "Powdered sugar", quantity: "for dusting" },
        ],
        nutritionalValue: {
          calories: 250,
          values: {
            energy: 250,
            carbohydrates: 30,
            protein: 4,
            fats: 12,
            fiber: 2,
            cholesterol: 0,
            sodium: 180
          }
        },
        preparationInfos: "In a large bowl, combine flour, yeast, sugar, and salt. Gradually add warm water to form a sticky dough. Cover and let it rise for 1 hour in a warm place. Heat olive oil in a frying pan over medium heat. Wet your hands with water and take a small portion of dough, shaping it into a ring. Fry the dough rings until golden brown, turning them to cook evenly. Drain on paper towels and dust with powdered sugar. Serve warm with tea.",
        storageInfos: "Sfenj are best served fresh but can be stored in an airtight container for up to 2 days.",
        tips: ["You can dip sfenj in honey or syrup for a sweeter version."]
      },
      {
        id: "17",
        title: "Bissara, Moroccan Fava Bean Soup",
        name:"Bissara",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-bissara.jpeg?alt=media&token=de13fbee-e948-4b3c-a468-cef0a3748413",
        type: "Appetizer",
        difficulty: "Easy",
        prepTime: "10 mins",
        cookTime: "1 hr",
        serving: 4,
        cost: "Low",
        presentation: "Bissara is a creamy, comforting soup made with fava beans, garlic, and spices. This traditional Moroccan dish is often enjoyed as a light meal or appetizer, especially during cold weather. Its rich, velvety texture, combined with the tangy flavor of olive oil and the warmth of cumin, makes it a perfect way to begin any meal.",
        ingredients: [
          { name: "Fava beans", quantity: "1 cup, soaked overnight" },
          { name: "Garlic", quantity: "3 cloves, minced" },
          { name: "Ground cumin", quantity: "1 tsp" },
          { name: "Ground paprika", quantity: "1 tsp" },
          { name: "Olive oil", quantity: "2 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 180,
          values: {
            energy: 180,
            carbohydrates: 25,
            protein: 8,
            fats: 5,
            fiber: 7,
            cholesterol: 0,
            sodium: 300
          }
        },
        preparationInfos: "In a large pot, cook the soaked fava beans with water until tender, about 45 minutes. Add garlic, cumin, and paprika, and cook for another 10 minutes. Use an immersion blender or a regular blender to puree the soup until smooth and creamy. Drizzle with olive oil and garnish with a sprinkle of cumin and paprika before serving.",
        storageInfos: "Bissara can be stored in the refrigerator for up to 3 days. Reheat gently before serving.",
        tips: ["Serve with fresh bread and a drizzle of olive oil."]
      },
      {
        id: "18",
        title: "Loubia, White Bean Stew",
        name:"Loubia",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-18.jpg?alt=media&token=9977a348-ac6c-46cb-b972-59da14ad5dd8",
        type: "Main Course",
        difficulty: "Average",
        prepTime: "10 mins",
        cookTime: "1 hr",
        serving: 6,
        cost: "Low",
        presentation: "Loubia is a rich and hearty Moroccan stew made with white beans, tomatoes, and a blend of aromatic spices. This dish is often enjoyed with Moroccan bread, which is used to scoop up the thick, flavorful sauce. The stewed beans take on the depth of the spices and are complemented by the natural sweetness of the tomatoes.",
        ingredients: [
          { name: "White beans", quantity: "2 cups, soaked overnight" },
          { name: "Tomatoes", quantity: "4, chopped" },
          { name: "Onion", quantity: "1, chopped" },
          { name: "Garlic", quantity: "3 cloves, minced" },
          { name: "Ground cumin", quantity: "1 tsp" },
          { name: "Ground paprika", quantity: "1 tsp" },
          { name: "Ground coriander", quantity: "1 tsp" },
          { name: "Cilantro", quantity: "1/4 cup, chopped" },
          { name: "Olive oil", quantity: "2 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 220,
          values: {
            energy: 220,
            carbohydrates: 30,
            protein: 10,
            fats: 6,
            fiber: 8,
            cholesterol: 0,
            sodium: 350
          }
        },
        preparationInfos: "In a large pot, sauté onions and garlic in olive oil until soft. Add the chopped tomatoes and cook until they release their juices. Stir in the ground cumin, paprika, coriander, salt, and pepper. Add the soaked white beans and enough water to cover the beans. Bring to a boil, then lower the heat and simmer for 1 hour, or until the beans are tender. Stir in chopped cilantro and serve with Moroccan bread.",
        storageInfos: "Loubia can be stored in the refrigerator for up to 3 days. Reheat on the stovetop before serving.",
        tips: ["For a richer flavor, add a small piece of preserved lemon to the stew while it cooks."]
      },
      {
        id: "19",
        title: "Msemen, Moroccan Flatbread",
        name:"Msemen",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-msamen.jpg?alt=media&token=41fc17e2-bb4a-4429-b680-3b7d600b6439",
        type: "Appetizer",
        difficulty: "Easy",
        prepTime: "15 mins",
        cookTime: "30 mins",
        serving: 4,
        cost: "Low",
        presentation: "Msemen is a traditional Moroccan flatbread that is crispy on the outside and soft on the inside. It is usually enjoyed with honey and butter for breakfast or as a snack with tea. The dough is layered and folded, giving it a flaky texture. The bread is often served hot, straight from the pan, with a crispy golden exterior.",
        ingredients: [
          { name: "Flour", quantity: "2 cups" },
          { name: "Semolina", quantity: "1/2 cup" },
          { name: "Salt", quantity: "1/2 tsp" },
          { name: "Sugar", quantity: "1 tsp" },
          { name: "Warm water", quantity: "as needed" },
          { name: "Butter", quantity: "for brushing" },
          { name: "Olive oil", quantity: "for frying" },
        ],
        nutritionalValue: {
          calories: 160,
          values: {
            energy: 160,
            carbohydrates: 20,
            protein: 4,
            fats: 8,
            fiber: 1,
            cholesterol: 0,
            sodium: 150
          }
        },
        preparationInfos: "In a bowl, combine flour, semolina, salt, and sugar. Gradually add warm water to form a soft, slightly sticky dough. Knead the dough for 10 minutes, then cover and let it rest for 30 minutes. Divide the dough into small balls and roll each ball into a thin circle. Fold the edges inward to form a square, then roll it out again. Heat olive oil in a pan and cook each square of dough until golden brown and crispy on both sides. Brush with butter and serve with honey.",
        storageInfos: "Msemen can be stored in an airtight container for up to 2 days. Reheat on a griddle or in a pan before serving.",
        tips: ["For a savory version, add a sprinkle of cumin and cheese before folding the dough."]
      },
      {
        id: "20",
        title: "Sweet Briouats",
        name:"Briouats",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-20.jpeg?alt=media&token=fae8ff33-241b-4de0-a84d-3ab14caba434",
        type: "Dessert",
        difficulty: "Average",
        prepTime: "45 mins",
        cookTime: "30 mins",
        serving: 8,
        cost: "Low",
        presentation: "Briouats are delicious Moroccan pastries, typically filled with sweetened almonds, and fried to a crispy golden perfection. These pastries are perfect for special occasions and are often served during celebrations or as a treat with mint tea. The filling is spiced with cinnamon, and the exterior is crisp and crunchy, making every bite an irresistible delight.",
        ingredients: [
          { name: "Almonds", quantity: "1 cup, ground" },
          { name: "Sugar", quantity: "1/2 cup" },
          { name: "Cinnamon", quantity: "1 tsp" },
          { name: "Phyllo dough", quantity: "1 package" },
          { name: "Butter", quantity: "2 tbsp, melted" },
          { name: "Honey", quantity: "1/4 cup" },
          { name: "Vegetable oil", quantity: "for frying" },
        ],
        nutritionalValue: {
          calories: 240,
          values: {
            energy: 240,
            carbohydrates: 30,
            protein: 4,
            fats: 10,
            fiber: 2,
            cholesterol: 15,
            sodium: 120
          }
        },
        preparationInfos: "In a bowl, combine the ground almonds, sugar, and cinnamon. Lay out the phyllo dough and cut it into strips. Brush each strip with melted butter, then place a spoonful of the almond mixture at the edge of each strip. Fold the dough over the filling to create a triangle shape, then seal the edges by pinching them together. Heat vegetable oil in a frying pan and fry the briouats until golden brown and crisp. Remove from oil and drain on paper towels. Drizzle with honey and serve warm.",
        storageInfos: "Briouats can be stored in an airtight container for up to 5 days. Reheat in the oven for a few minutes to restore crispness.",
        tips: ["Add a few drops of orange blossom water to the filling for an extra fragrant touch."]
      },
      {
        id: "21",
        title: "Moroccan Salad",
        name:"Moroccan Salad",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-21.jpg?alt=media&token=3e096d15-23d3-4b72-b059-8c0d9f222f98",
        type: "Appetizer",
        difficulty: "Easy",
        prepTime: "15 mins",
        cookTime: "N/A",
        serving: 4,
        cost: "Low",
        presentation: "Moroccan Salad is a refreshing and colorful salad made with fresh vegetables, herbs, and a light olive oil dressing. It’s a great side dish to serve with any Moroccan meal. The combination of tomatoes, cucumbers, onions, and herbs provides a burst of freshness and is enhanced with a tangy lemon dressing.",
        ingredients: [
          { name: "Tomatoes", quantity: "3, diced" },
          { name: "Cucumber", quantity: "1, diced" },
          { name: "Red onion", quantity: "1/2, thinly sliced" },
          { name: "Cilantro", quantity: "2 tbsp, chopped" },
          { name: "Parsley", quantity: "2 tbsp, chopped" },
          { name: "Olives", quantity: "1/2 cup, pitted" },
          { name: "Lemon", quantity: "1, juiced" },
          { name: "Olive oil", quantity: "3 tbsp" },
          { name: "Salt and pepper", quantity: "to taste" },
        ],
        nutritionalValue: {
          calories: 100,
          values: {
            energy: 100,
            carbohydrates: 10,
            protein: 2,
            fats: 5,
            fiber: 3,
            cholesterol: 0,
            sodium: 150
          }
        },
        preparationInfos: "In a large bowl, combine the diced tomatoes, cucumber, onion, cilantro, parsley, and olives. In a separate small bowl, whisk together the lemon juice, olive oil, salt, and pepper to make the dressing. Pour the dressing over the salad and toss gently to combine. Let it sit for 5 minutes for the flavors to meld before serving.",
        storageInfos: "Salade Marocaine can be stored in the refrigerator for up to 1 day. Serve fresh for the best flavor.",
        tips: ["You can add a pinch of ground cumin for extra flavor."]
      },
      {
        id: "22",
        title: "Makroud, Semolina Cake",
        name: "Makroud",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-22.webp?alt=media&token=8a8eaf93-c438-4eee-8337-23abd109d5ca",
        type: "Dessert",
        difficulty: "Average",
        prepTime: "30 mins",
        cookTime: "45 mins",
        serving: 8,
        cost: "Low",
        presentation: "Makroud is a traditional Moroccan semolina cake, often filled with dates and nuts. It is typically fried until golden brown and then soaked in honey syrup. This cake has a rich, nutty flavor with a hint of orange blossom water and is often enjoyed with a cup of Moroccan tea.",
        ingredients: [
          { name: "Semolina", quantity: "2 cups" },
          { name: "Dates", quantity: "1 cup, pitted and chopped" },
          { name: "Almonds", quantity: "1/4 cup, chopped" },
          { name: "Orange blossom water", quantity: "1 tsp" },
          { name: "Butter", quantity: "3 tbsp, melted" },
          { name: "Sugar", quantity: "1/2 cup" },
          { name: "Honey", quantity: "1/2 cup" },
          { name: "Vegetable oil", quantity: "for frying" },
          { name: "Salt", quantity: "1/4 tsp" },
        ],
        nutritionalValue: {
          calories: 300,
          values: {
            energy: 300,
            carbohydrates: 40,
            protein: 5,
            fats: 12,
            fiber: 3,
            cholesterol: 20,
            sodium: 100
          }
        },
        preparationInfos: "In a bowl, combine the semolina, melted butter, salt, and orange blossom water. Gradually add water and knead the dough until it is smooth and pliable. Roll the dough into small balls, then flatten each one into a small disc. Place a spoonful of chopped dates and almonds in the center of each disc, fold over to seal, and shape into a small rectangle. Heat the oil in a pan and fry the cakes until golden and crispy. In a separate pan, heat the honey and sugar to make the syrup. Once the cakes are fried, dip them in the hot syrup and allow them to soak for a few minutes before serving.",
        storageInfos: "Makroud can be stored in an airtight container for up to 5 days. The honey syrup will keep them moist.",
        tips: ["For an extra aromatic flavor, add a few drops of rose water to the syrup."]
      },
      {
        id: "23",
        title: "Seffa, Sweet Couscous",
        name: "Seffa",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-23.jpg?alt=media&token=6c08a4e3-399b-4d6f-b316-026c81f62a90",
        type: "Dessert",
        difficulty: "Average",
        prepTime: "15 mins",
        cookTime: "45 mins",
        serving: 6,
        cost: "Low",
        presentation: "Seffa is a traditional Moroccan dish typically enjoyed as a dessert. It features couscous steamed until fluffy, then topped with a combination of cinnamon, powdered sugar, and almonds. It's a sweet and comforting dish that's commonly served during special occasions or family gatherings, offering a wonderful balance of textures and flavors with the crunchy almonds and the soft couscous.",
        ingredients: [
          { name: "Couscous", quantity: "2 cups" },
          { name: "Butter", quantity: "4 tbsp, melted" },
          { name: "Powdered sugar", quantity: "1/2 cup" },
          { name: "Cinnamon", quantity: "1 tsp" },
          { name: "Almonds", quantity: "1/2 cup, slivered" },
          { name: "Raisins", quantity: "1/2 cup" },
          { name: "Honey", quantity: "3 tbsp" },
          { name: "Salt", quantity: "1/4 tsp" },
          { name: "Water", quantity: "1 cup" },
        ],
        nutritionalValue: {
          calories: 270,
          values: {
            energy: 270,
            carbohydrates: 45,
            protein: 6,
            fats: 8,
            fiber: 4,
            cholesterol: 0,
            sodium: 75
          }
        },
        preparationInfos: "Steam the couscous by placing it in a large pot or couscoussier with boiling water. Cover and steam for about 20 minutes, then fluff it with a fork. Once cooked, transfer the couscous to a large bowl and mix it with the melted butter, powdered sugar, and a pinch of salt. Toast the slivered almonds in a dry pan until golden brown. In a separate pan, heat the honey and raisins until warm. To serve, plate the couscous and top with the cinnamon, toasted almonds, and honey-raisin mixture.",
        storageInfos: "Seffa can be stored in the refrigerator for up to 2 days. Reheat gently in the microwave or steam again to maintain its texture.",
        tips: ["You can also add a handful of pistachios for extra crunch and flavor."]
      },
      {
        id: "24",
        title: "Kaab el Ghazal",
        name: "Kaab el Ghazal",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-24.jpg?alt=media&token=83b86469-79ce-4cb6-81e2-beaf14a24e74",
        type: "Dessert",
        difficulty: "Above average",
        prepTime: "1 hr",
        cookTime: "30 mins",
        serving: 8,
        cost: "Average",
        presentation: "Kaab el Ghazal, also known as Gazelle Horns, are a delicate Moroccan pastry with a rich almond filling and a crispy, flaky dough. Shaped like crescent moons, these pastries are a beautiful treat often served with Moroccan tea. Their sweet, fragrant almond paste filling and the crisp, golden exterior make them a beloved dessert for special occasions and celebrations.",
        ingredients: [
          { name: "All-purpose flour", quantity: "2 cups" },
          { name: "Butter", quantity: "1/2 cup, cold" },
          { name: "Water", quantity: "1/4 cup" },
          { name: "Salt", quantity: "1/4 tsp" },
          { name: "Almonds", quantity: "1 cup, ground" },
          { name: "Powdered sugar", quantity: "1/2 cup" },
          { name: "Orange blossom water", quantity: "1 tsp" },
          { name: "Cinnamon", quantity: "1 tsp" },
          { name: "Butter", quantity: "2 tbsp, melted (for brushing)" },
          { name: "Egg yolk", quantity: "1, beaten (for glazing)" },
          { name: "Sesame seeds", quantity: "1 tbsp (optional, for garnish)" },
        ],
        nutritionalValue: {
          calories: 220,
          values: {
            energy: 220,
            carbohydrates: 30,
            protein: 4,
            fats: 8,
            fiber: 2,
            cholesterol: 0,
            sodium: 80
          }
        },
        preparationInfos: "To make the dough, combine the flour, cold butter, and a pinch of salt. Gradually add the water and knead until the dough is smooth. Wrap it in plastic and let it rest for 30 minutes. Meanwhile, prepare the filling by mixing the ground almonds, powdered sugar, cinnamon, and orange blossom water. Roll out the dough into thin sheets and cut into circles. Place a small amount of almond filling in the center of each circle, then fold the dough over to form a crescent shape. Seal the edges and press with a fork to seal. Brush the pastries with melted butter and egg yolk for a golden finish. Bake in a preheated oven at 350°F (175°C) for about 20-30 minutes, until golden brown. Garnish with sesame seeds if desired.",
        storageInfos: "Kaab el Ghazal can be stored in an airtight container for up to 3 days. They also freeze well for up to a month.",
        tips: ["For extra flavor, add a little bit of ground rose petals to the almond filling."]
      },
      {
        id: "25",
        title: "Seafood Pastilla, Seafood Pie",
        name: "Seafood Pastilla",
        imgUrl:"https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-25.jpg?alt=media&token=cc7fad7d-b003-494f-b20c-1186097f4c8e",
        type: "Main Course",
        difficulty: "Above average",
        prepTime: "45 mins",
        cookTime: "1 hr",
        serving: 6,
        cost: "Above average",
        presentation: "Seafood Pastilla is a luxurious Moroccan dish featuring a rich combination of shrimp, mussels, and other seafood, all wrapped in a crispy, golden phyllo dough. The spices give it an aromatic depth, while the texture is an enticing balance of the tender seafood filling and the crispy pastry shell. It is often served during celebrations or as a special treat at Moroccan gatherings. The sweet and savory twist of powdered sugar and cinnamon on top adds a signature Moroccan flair.",
        ingredients: [
          { name: "Shrimp (peeled and deveined)", quantity: "200g" },
          { name: "Mussels", quantity: "200g" },
          { name: "Squid (optional, chopped)", quantity: "100g" },
          { name: "Phyllo dough", quantity: "1 package" },
          { name: "Onion", quantity: "1, finely chopped" },
          { name: "Garlic", quantity: "4 cloves, minced" },
          { name: "Paprika", quantity: "1 tsp" },
          { name: "Ground cumin", quantity: "1 tsp" },
          { name: "Ground cinnamon", quantity: "1/2 tsp" },
          { name: "Ground turmeric", quantity: "1/2 tsp" },
          { name: "Fresh cilantro", quantity: "2 tbsp, chopped" },
          { name: "Fresh parsley", quantity: "2 tbsp, chopped" },
          { name: "Lemon", quantity: "1, juiced and zested" },
          { name: "Eggs", quantity: "3, beaten" },
          { name: "Butter", quantity: "4 tbsp, melted" },
          { name: "Salt and pepper", quantity: "to taste" },
          { name: "Powdered sugar", quantity: "1 tbsp (for garnish)" },
          { name: "Ground cinnamon", quantity: "1/2 tsp (for garnish)" },
        ],
        nutritionalValue: {
          calories: 400,
          values: {
            energy: 400,
            carbohydrates: 35,
            protein: 25,
            fats: 18,
            fiber: 3,
            cholesterol: 80,
            sodium: 500
          }
        },
        preparationInfos: "Start by cooking the seafood. Heat some olive oil in a pan and sauté the shrimp, mussels, and squid (if using) with garlic, paprika, cumin, turmeric, salt, and pepper. Cook until the seafood is just done. Remove from the pan and set aside to cool. In the same pan, sauté the onions until soft and translucent. Then, add the cooked seafood back to the pan, along with cilantro, parsley, lemon juice, and zest. Mix everything well. In a separate bowl, beat the eggs and gently stir into the seafood mixture, allowing it to bind everything together. Preheat the oven to 375°F (190°C). To assemble, layer phyllo dough in a pie dish, brushing each layer with melted butter. Spoon the seafood filling into the center of the pie, then fold the dough over the top, sealing the edges. Brush the top of the pastry with melted butter and bake for 25-30 minutes until golden and crispy. Before serving, sprinkle with powdered sugar and a pinch of cinnamon for a sweet-savory touch.",
        storageInfos: "Seafood pastilla is best served fresh, but it can be stored in the refrigerator for up to 2 days. Reheat in the oven for best results to keep the pastry crispy.",
        tips: ["For extra flavor, add some toasted almonds to the filling, or drizzle with a little bit of orange blossom water before serving."]
      },
{
  id: "26",
  title: "Moroccan Avocado Smoothie",
  name: "Avocado Smoothie",
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-26.webp?alt=media&token=896a18e0-2013-4069-8c1a-7954bc920da3",
  type: "Beverage",
  difficulty: "Very easy",
  prepTime: "5 mins",
  cookTime: "0 mins",
  serving: 2,
  cost: "Low",
  presentation: "The Moroccan Avocado Smoothie is a beloved drink, known for its creamy texture and natural sweetness. Blended with milk and a touch of honey, this smoothie is refreshing and nourishing. The smooth avocado combines with milk to create a rich, velvety beverage that can be enjoyed any time of day, often enhanced with a hint of orange blossom water for a subtle Moroccan twist.",
  ingredients: [
    { name: "Avocado", quantity: "1 ripe, peeled and pitted" },
    { name: "Milk", quantity: "1-2 cups (adjust for desired thickness)" },
    { name: "Honey or sugar", quantity: "1-2 tbsp, to taste" },
    { name: "Orange blossom water", quantity: "1/4 tsp (optional)" },
    { name: "Ice cubes", quantity: "for serving" }
  ],
  nutritionalValue: {
    calories: 280,
    values: {
      energy: 280,
      carbohydrates: 20,
      protein: 4,
      fats: 18,
      fiber: 8,
      cholesterol: 5,
      sodium: 50
    }
  },
  preparationInfos: "In a blender, combine the avocado, milk, and honey or sugar. Add the orange blossom water if using, and blend until smooth and creamy. Adjust milk to reach the desired thickness. Serve over ice cubes for extra refreshment. This smoothie is best enjoyed fresh but can be refrigerated for up to one day.",
  storageInfos: "Store in the refrigerator for up to 24 hours, though it's best enjoyed fresh.",
  tips: [
    "Use a ripe avocado for the creamiest texture.",
    "Add a banana for a sweeter, thicker smoothie."
  ]
},
{
  id: "27",
  title: "Moroccan Orange Blossom Iced Tea",
  name: "Orange Blossom Iced Tea",
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Fimg-27.jpg?alt=media&token=83c8f6c0-7c75-4ed6-a46f-b1fd4e9b6fd6",
  type: "Beverage",
  difficulty: "Very easy",
  prepTime: "10 mins",
  cookTime: "5 mins",
  serving: 4,
  cost: "Very low",
  presentation: "This Moroccan Orange Blossom Iced Tea combines green tea with the fragrant essence of orange blossom water, a beloved ingredient in Moroccan cuisine. Served chilled, this tea is light, aromatic, and wonderfully refreshing. It’s especially enjoyable on a hot day, offering both hydration and a taste of Moroccan tradition.",
  ingredients: [
    { name: "Green tea leaves or bags", quantity: "2 tbsp or 2 bags" },
    { name: "Water", quantity: "4 cups" },
    { name: "Honey or sugar", quantity: "2-3 tbsp, to taste" },
    { name: "Orange blossom water", quantity: "1 tsp" },
    { name: "Fresh mint leaves", quantity: "a handful" },
    { name: "Ice cubes", quantity: "for serving" }
  ],
  nutritionalValue: {
    calories: 50,
    values: {
      energy: 50,
      carbohydrates: 12,
      protein: 0,
      fats: 0,
      fiber: 0,
      cholesterol: 0,
      sodium: 5
    }
  },
  preparationInfos: "Boil the water and add green tea leaves or bags. Let it steep for 3-5 minutes, then remove the tea bags or strain the leaves. Stir in honey or sugar while the tea is still warm, then add the orange blossom water and fresh mint leaves. Let the tea cool, then pour over ice cubes in glasses for serving. Garnish with additional mint leaves if desired.",
  storageInfos: "Can be refrigerated for up to 2 days, though best served fresh and cold.",
  tips: [
    "Adjust the amount of orange blossom water to your taste; a little goes a long way.",
    "Add slices of orange or lemon for an extra citrusy flavor."
  ]
},
{
  id: "28",
  name: "Chebakia",
  title: "Traditional Moroccan Chebakia",
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Frecette-chebakia.jpg?alt=media&token=1b1e678f-ea68-493a-a681-70666c32417f",
  type: "Dessert",
  difficulty: "Average",
  prepTime: "1 hr",
  cookTime: "20 mins",
  serving: 8,
  cost: "Average",
  presentation: "Chebakia is a traditional Moroccan dessert often enjoyed during Ramadan. These flower-shaped fried cookies are dipped in warm honey and sprinkled with toasted sesame seeds, offering a crispy texture and a delightful sweetness that pairs beautifully with mint tea.",
  ingredients: [
    { name: "flour", quantity: "4 cups" },
    { name: "Ground cinnamon", quantity: "1 tsp" },
    { name: "Ground anise", quantity: "1 tsp" },
    { name: "Ground sesame seeds", quantity: "1/2 cup" },
    { name: "Orange blossom water", quantity: "1/4 cup" },
    { name: "White vinegar", quantity: "1 tbsp" },
    { name: "Butter", quantity: "3 tbsp, melted" },
    { name: "Egg", quantity: "1 large" },
    { name: "Warm water", quantity: "as needed for dough" },
    { name: "Vegetable oil", quantity: "for frying" },
    { name: "Honey", quantity: "2 cups" },
    { name: "Sesame seeds", quantity: "1/2 cup, toasted, for garnish" }
  ],
  nutritionalValue: {
    calories: 350,
    values: {
      energy: 350,
      carbohydrates: 45,
      protein: 5,
      fats: 18,
      fiber: 2,
      cholesterol: 15,
      sodium: 70
    }
  },
  preparationInfos: `Start by preparing the dough. In a large mixing bowl, combine the flour, ground cinnamon, ground anise, and ground sesame seeds. Mix well to ensure the spices are evenly distributed. Create a well in the center of the mixture and add the orange blossom water, white vinegar, melted butter, and a beaten egg. Gradually incorporate the ingredients, adding warm water little by little until the mixture comes together into a soft and pliable dough. Knead the dough for 8-10 minutes until it becomes smooth and elastic.

Divide the dough into small portions to make it easier to handle. Roll out each portion on a lightly floured surface until it is thin but not too delicate. Using a Chebakia mold or a knife, cut the dough into rectangles and make slits to shape them into flowers or the traditional Chebakia pattern.

In a large, deep frying pan, heat vegetable oil over medium heat. Test the oil with a small piece of dough; if it sizzles and rises to the surface, the oil is ready. Fry the shaped Chebakia in small batches, flipping them occasionally, until they are golden brown and crispy. Remove them with a slotted spoon and drain briefly on paper towels.

While the Chebakia are frying, warm the honey in a large saucepan over low heat to make it more fluid. As soon as each batch of Chebakia is fried, submerge them in the warm honey, ensuring they are fully coated. Use a slotted spoon to transfer them to a wire rack to let any excess honey drip off.

Finally, sprinkle the Chebakia with toasted sesame seeds while they are still sticky from the honey. Let them cool completely before serving. The result will be crispy, sweet cookies with a delightful floral aroma.`,
  storageInfos: "Store in an airtight container for up to 2 weeks. Best enjoyed fresh.",
  tips: [
    "Use a Chebakia mold to make shaping easier and more consistent.",
    "Warm the honey slightly to ensure the cookies get evenly coated.",
    "Add a pinch of saffron to the dough for an authentic flavor boost."
  ]
},
{
  id: "29",
  name: "Chicken with Daghmira",
  title: "Moroccan Chicken with Daghmira (Onion sauce)",
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2FIMG_4456-1024x768.jpg.webp?alt=media&token=d2619533-74cd-4053-becf-f7377fa43e5d",
  type: "Main Course",
  difficulty: "Above average",
  prepTime: "30 mins",
  cookTime: "1 hr",
  serving: 4,
  cost: "Average",
  presentation: "Chicken with Daghmira is a unique and flavorful Moroccan dish where chicken is simmered in a spiced flour sauce known as 'daghmira'. The dish combines the richness of chicken with the aromatic depth of spices and the creamy texture of the flour sauce. Served with crusty bread or couscous, it's a comforting and satisfying meal.",
  ingredients: [
    { name: "Whole chicken", quantity: "1, cut into pieces" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Onion", quantity: "1 large, finely chopped" },
    { name: "Garlic cloves", quantity: "4, minced" },
    { name: "Ground ginger", quantity: "1 tsp" },
    { name: "Ground cumin", quantity: "1 tsp" },
    { name: "Ground turmeric", quantity: "1/2 tsp" },
    { name: "Ground cinnamon", quantity: "1/2 tsp" },
    { name: "Paprika", quantity: "1 tsp" },
    { name: "Salt", quantity: "to taste" },
    { name: "Black pepper", quantity: "to taste" },
    { name: "Fresh cilantro", quantity: "1/4 cup, chopped" },
    { name: "Flour", quantity: "1/2 cup" },
    { name: "Water", quantity: "4 cups" },
    { name: "Lemon", quantity: "1, juiced" },
    { name: "Saffron threads", quantity: "a pinch" },
    { name: "Cinnamon stick", quantity: "1" }
  ],
  nutritionalValue: {
    calories: 400,
    values: {
      energy: 400,
      carbohydrates: 18,
      protein: 35,
      fats: 22,
      fiber: 4,
      cholesterol: 75,
      sodium: 500
    }
  },
  preparationInfos: `Begin by heating the olive oil in a large pot over medium heat. Add the chopped onion and sauté for 5-7 minutes until soft and translucent. Add the minced garlic and cook for an additional minute until fragrant. Stir in the ground ginger, cumin, turmeric, cinnamon, paprika, salt, and black pepper, letting the spices bloom for 2-3 minutes.

Add the chicken pieces to the pot, stirring to coat them in the spice mixture. Brown the chicken on all sides, about 8-10 minutes. Once the chicken is browned, add the cilantro, cinnamon stick, and a pinch of saffron threads. Pour in the water, making sure the chicken is mostly submerged. Cover and simmer for 30-40 minutes until the chicken is fully cooked and tender.

While the chicken is cooking, prepare the daghmira (flour sauce). In a separate pan, heat a tablespoon of olive oil over medium heat and add the flour. Stir constantly for about 5 minutes until the flour turns a golden color, making sure it doesn’t burn. Gradually add a bit of the cooking liquid from the chicken to the flour, stirring to create a smooth paste. Slowly whisk in the remaining cooking liquid, making sure the sauce remains smooth and creamy.

Once the chicken is cooked, add the daghmira to the pot, stirring to combine. Let the sauce simmer for an additional 10 minutes to thicken. Add lemon juice to taste and adjust seasoning with salt and pepper if necessary.

Serve the chicken with the rich, flavorful sauce over a bed of couscous or with Moroccan bread to soak up the sauce. Garnish with additional chopped cilantro and serve hot.`,
  storageInfos: "Store in an airtight container in the fridge for up to 3 days. Reheat before serving.",
  tips: [
    "Daghmira can be made ahead of time and stored in the fridge for a couple of days.",
    "If you prefer a thicker sauce, cook the daghmira for a few extra minutes until it reaches your desired consistency.",
    "For a touch of sweetness, add raisins or apricots to the sauce during the simmering process."
  ]
},
{
  id: "30",
  name: "Lharsha",
  title: "Traditional Moroccan Semolina Flatbread",
  imgUrl: "https://firebasestorage.googleapis.com/v0/b/recipes-app-d9a48.firebasestorage.app/o/recipes-images%2Frecipe-semolina-pancakes-harsha-image-laq8y-compressed.png?alt=media&token=79e3d0dc-f0b7-43c3-ba6c-422c29e4e8e8",
  type: "Appetizer",
  difficulty: "Easy",
  prepTime: "15 mins",
  cookTime: "20 mins",
  serving: 6,
  cost: "Low",
  presentation: "Lharsha is a traditional Moroccan semolina flatbread, often enjoyed with honey, butter, or cheese. Its golden, crispy crust and soft, airy interior make it a perfect accompaniment to any Moroccan meal, whether served as a snack or a side dish with soup or stews.",
  ingredients: [
    { name: "Semolina", quantity: "2 cups" },
    { name: "All-purpose flour", quantity: "1/2 cup" },
    { name: "Baking powder", quantity: "1 tsp" },
    { name: "Salt", quantity: "1/2 tsp" },
    { name: "Sugar", quantity: "1 tsp" },
    { name: "Olive oil", quantity: "3 tbsp" },
    { name: "Warm water", quantity: "1 cup (or as needed)" },
    { name: "Butter", quantity: "for serving" },
    { name: "Honey", quantity: "for serving" }
  ],
  nutritionalValue: {
    calories: 250,
    values: {
      energy: 250,
      carbohydrates: 40,
      protein: 5,
      fats: 10,
      fiber: 3,
      cholesterol: 20,
      sodium: 150
    }
  },
  preparationInfos: `In a large bowl, combine the semolina, all-purpose flour, baking powder, salt, and sugar. Mix well to ensure the dry ingredients are evenly distributed. Add the olive oil to the dry mixture and rub it between your fingers to incorporate it evenly, creating a crumbly texture.

Gradually add the warm water to the mixture, stirring continuously until the dough comes together. The dough should be soft but not sticky. If it’s too dry, add a little more water, a tablespoon at a time.

Turn the dough out onto a lightly floured surface and knead it for a few minutes until it becomes smooth. Divide the dough into small balls (about the size of a golf ball). Flatten each ball into a round disc, about 1/2 inch thick.

Heat a griddle or a non-stick skillet over medium-low heat. Place the flattened dough onto the hot griddle and cook for 5-7 minutes on each side, or until golden brown and cooked through. The outside should be crispy, while the inside remains soft and airy.

Once the Lharsha is cooked, remove it from the skillet and let it cool slightly. Serve warm with butter and honey, or alongside a hearty stew or soup for a delicious meal.`,
  storageInfos: "Store in an airtight container for up to 2 days. Reheat gently on a griddle before serving.",
  tips: [
    "Lharsha is best enjoyed fresh and warm.",
    "You can make mini lharsha for a smaller portion, perfect for individual servings.",
    "For a savory version, add a pinch of cumin or za'atar to the dough."
  ]
}
      
  ];