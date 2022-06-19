import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Post from "./components/Post";

import { Container } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post/:postId' element={<Post />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
