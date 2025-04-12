# Savor Morocco 🍽️

[Live Demo](https://savor-morocco.vercel.app) • [GitHub Repo](https://github.com/ACE9935/Savor-Morocco)

**Savor Morocco** is a web app that brings the vibrant and rich flavors of Moroccan cuisine to your fingertips. With a collection of authentic recipes, you can explore, save, and share your favorites while creating custom shopping lists and recipe books. The platform also allows users to interact with the community through comments and ratings.

---

## 🌟 Features

### 🔐 Authentication
- Users can authenticate via **Email/Password** or **Google**.
- Upon successful authentication, a **profile page** is created for the user.
- Users can:
  - Add recipes to **Favorites**
  - Rate recipes and impact their overall rating
  - Leave **comments** on recipe pages (only for authenticated users)
  - Create custom **recipe books**
  - Create custom **shopping lists** (only for authenticated users)
  - **Delete** their account at any time

### 🍲 Recipes
- **30 Authentic Moroccan Recipes** including main courses, beverages, desserts, and appetizers.
- Each recipe includes:
  - A **presentation paragraph** introducing the recipe
  - **Ingredients** with the option to save them to a shopping list (for authenticated users)
  - **Preparation steps** for easy cooking guidance
  - **Comment section** for users to discuss and ask for help (only for authenticated users)
  - **Similar recipes** tab for recommendations of the same type (Main Course, Beverage, Dessert, Appetizer)

### 🖥 Backend
- The backend is mainly used for authentication actions such as sending:
  - **Verification emails**
  - **Password reset emails**
- The rest of the authentication process is handled by **Firebase** on the client-side.
  
### 🎨 Design
- The design is inspired by [Giallo Zafferano](https://www.giallozafferano.com/), focusing on a clean, user-friendly layout to enhance the cooking experience.

---

## 🛠 Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Authentication**: Firebase Authentication (Email/Password & Google)
- **Database**: Firebase Firestore (for storing user data and recipes)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🧑‍💻 Getting Started

To run the project locally:

```bash
git clone https://github.com/ACE9935/Savor-Morocco.git
cd Savor-Morocco
npm install
npm run dev
