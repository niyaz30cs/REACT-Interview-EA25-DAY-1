import React, { Suspense } from 'react'

const LoadingCompo=React.lazy(()=>import("./Loading"))
function LazyLoading() {
  return (
    <>
      <Suspense fallback={<div className='load'>Loading....</div>}>
        <LoadingCompo/>
      </Suspense>
    </>
  )
}

export default LazyLoading
