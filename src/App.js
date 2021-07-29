import "./App.css";
import AppHeader from "./components/common/AppHeader";
import AppHome from "./views/AppHome";
import AppFooter from "./components/common/AppFooter";

import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";

const { Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
