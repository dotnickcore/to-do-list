import React from 'react'

function Card({children}: { children: React.ReactNode } ) {
  return (
    <div className="w-full max-w-4xl bg-slate-300 rounded shadow-lg p-12 mx-auto">
      {children}
    </div>
  )
}

export default Card