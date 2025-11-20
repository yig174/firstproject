import React from 'react'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home - YIG174",
  description: "Free posting website for information, no account needed."
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-300 w-full h-full p-10 justify-center items-center flex">
          <div className="rounded-lg bg-white p-4 w-full min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
