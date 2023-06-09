import React from 'react'

const PaddingContainer = ({children}) => {
  return (
    <div style={{
        margin: "0px 50px 50px 50px",
        width: "50%",
    }}>
        {children}
    </div>
  )
}

export default PaddingContainer