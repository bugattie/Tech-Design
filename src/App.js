import "./App.css";
import AppHeader from "./components/common/AppHeader";
import AppHome from "./views/AppHome";

import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

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
    </Layout>
  );
}

export default App;
