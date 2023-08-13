import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

import { AuthProvider } from "./context/index";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import history from "./history";
import { LoginPage } from './components/login.component'
import SignUp from './components/signup.component'
import Table from './components/table.component'
import EditAlgorithm from './components/editAlgorithm.component'
import AdminPanel from './Pages/adminPanel.component'
import NavBar from './components/NavBar.component'
import { useAuth } from "./Hooks";
import { PrivateRoute } from './Router/PrivateRoute'
import { NextPageFromLogin } from './Router/NextPageFromLogin'
import { useNavigate } from "react-router-dom";
import { MQTTProvider } from './context/MqttContext';

function App() {

  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
        <div className="App">
          <Router history={history}>
            <NavBar />
      <MQTTProvider>

            <Routes>

              <Route path="/sign-in" element={
                <NextPageFromLogin ><LoginPage /></NextPageFromLogin>} />

              <Route path="/sign-up" element={
                <PrivateRoute ><SignUp /></PrivateRoute>} />

              <Route path="/" element={
                <PrivateRoute >
                  <Table />
                  
                  </PrivateRoute>} />

              <Route path="/algorithm" element={
                <PrivateRoute ><EditAlgorithm /></PrivateRoute>} />

              <Route path="/admin" element={
                <PrivateRoute ><AdminPanel value={false} /></PrivateRoute>} />

            </Routes>
      </MQTTProvider>

          </Router>
        </div>
    </AuthProvider>
  )
}

export default App
