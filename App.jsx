import Home from "./pages/Home";
import Layout from "./components/layout.jsx";


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home />
     
    </Layout>
  );
}