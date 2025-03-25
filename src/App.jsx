import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link,useNavigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App