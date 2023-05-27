import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GucciRoutes } from '../routes/GucciRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<GucciRoutes/>}></Route>
      </Routes>
    </>
  )
}
