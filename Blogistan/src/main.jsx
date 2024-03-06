import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AuthLayout, Login } from './components/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes> 
          <Route path="/" element={<App />}> 
            <Route index element={<Home />} />
            <Route path="login" element={<AuthLayout authentication={false}><Login /></AuthLayout>} />
            <Route path="signup" element={<AuthLayout authentication={false}><Signup /></AuthLayout>} />
            <Route path="all-posts" element={<AuthLayout authentication><AllPosts /></AuthLayout>} />
            <Route path="add-post" element={<AuthLayout authentication><AddPost /></AuthLayout>} />
            <Route path="edit-post/:slug" element={<AuthLayout authentication><EditPost /></AuthLayout>} />
            <Route path="post/:slug" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
