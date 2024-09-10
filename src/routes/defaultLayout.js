import React from 'react'
import Header from '../common/header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
