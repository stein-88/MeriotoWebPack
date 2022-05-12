import React, { useState } from 'react'
import {
 BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom'
import Homepage from '@components/Homepage'
import RegProduct from '@components/RegProduct'
import Show from '@components/Show'
import NewShow from '@components/NewShow'
import Modal from '@generics/Modal'
import Footer from '@components/Footer'

const App = () => {
    const [content, setContent] = useState(undefined)

    const handleContent = (param) => setContent(param)

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Homepage />} path="/" />
                <Route element={<RegProduct handleContent={handleContent} />} path="/registerproduct" />
                <Route element={<RegProduct isEdit handleContent={handleContent} />} path="/editproduct" />
                <Route element={<Show handleContent={handleContent} />} path="/showproduct" />
                <Route element={<NewShow />} path="/derickapi" />
                <Route element={<Navigate replace to="/" />} path="*" />
            </Routes>
            <Footer />
            <Modal content={content} />
        </BrowserRouter>
    )
}

export default App
