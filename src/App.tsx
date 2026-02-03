import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Give from './pages/Give';
import Visit from './pages/Visit';

import Sermons from './pages/Sermons';
import Watch from './pages/Watch';
import New from './pages/New';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/new" element={<New />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give" element={<Give />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
