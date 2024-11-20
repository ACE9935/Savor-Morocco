import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin/SignIn';
import Register from './pages/register/Regsiter';
import ResetPasswordForm from './pages/reset-password/ResetPasswordForm';
import Layout from './components/Layout';
import RecipeContainer from './pages/recipes/RecipeContainer';
import UserProvider from './context/auth-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProfilePage from './pages/profile/ProfilePage';
import { ToastProvider } from './context/ToastContext';
import RecipeBookContainer from './pages/profile/RecipeBookContainer';
import ProfileLayout from './components/ProfileLayout';
import ShoppingListContainer from './pages/profile/ShoppingListContainer';
import ShoppingListAllContainer from './pages/profile/ShoppingListAllContainer';
import NotFound from './components/NotFound'; // Import NotFound component
import ScrollToTop from './components/ScrollToTop';
import SearchResultsPage from './pages/search/SearchResultsPage';
import HomeContainer from './pages/home/HomeContainer';
import { SigninModalProvider } from './components/SigninModal';

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    primary: {
      main: "#e28557",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <SigninModalProvider>
          <ToastProvider>
            <ThemeProvider theme={theme}>
             <ScrollToTop />
              <Routes>
                {/* Authentication Routes */}
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPasswordForm />} />

                {/* Recipes Layout Route */}
                <Route path="/recipes" element={<Layout />}>
                  <Route path=":recipeId" element={<RecipeContainer/>} />
                </Route>

                <Route path="/search" element={<Layout />}>
                  <Route path=":searchTerm" element={<SearchResultsPage/>} />
                </Route>

                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<HomeContainer/>} />
                </Route>

                <Route path="/profile" element={<ProfileLayout />}>
                  <Route path="overview" element={<ProfilePage />} />
                  <Route path="shopping-list" element={<ShoppingListContainer />} />
                  <Route path="shopping-list/all" element={<ShoppingListAllContainer />} />
                  <Route path="recipe-book/:recipeBookId" element={<RecipeBookContainer />} />
                </Route>

                {/* 404 Route (catch-all) */}
                <Route path="*" element={<Layout />}>
                 <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </ThemeProvider>
          </ToastProvider>
          </SigninModalProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;


