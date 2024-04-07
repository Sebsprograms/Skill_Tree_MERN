import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Layout, Landing, SkillTree } from './pages';

export const checkIfDarkTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}
checkIfDarkTheme();

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Landing /> },
      { path: 'skill-tree', element: <SkillTree /> }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;

}

export default App
