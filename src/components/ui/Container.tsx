import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center h-screen w-full bg-slate-200 py-8">
      {children}
    </div>
  )
}

export default Container