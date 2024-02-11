import React from 'react'
import PasswordReset from '../PasswordReset'
import ForgotPassword from '../ForgotPassword'
import { Routes, Route } from 'react-router-dom'
import Signup from '../Signup'
const Home = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup />} />

                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<PasswordReset />} />


            </Routes>
        </div>
    )
}

export default Home;