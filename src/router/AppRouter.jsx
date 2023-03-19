import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={ <AuthRouter /> } />
        <Route exact path="/" element={ <ChatPage /> } />
      </Routes>
    </Router>
  )
}

