import Main from "./components/Main";
import ContextProvider from "./store/context";
import Header from "./ui/Header";
import Layout from "./ui/Layout";

function App() {
  return (
    <ContextProvider>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </ContextProvider>
  );
}

export default App;
