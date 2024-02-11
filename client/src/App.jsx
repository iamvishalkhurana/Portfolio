import { Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Layout from "./components/Layout";
import Conversation from "./components/chat/Conversation";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/conversation" element={<Conversation />} />
    </Routes>
  );
};

export default App;
