import React from 'react'

const css = { background: '#000', padding: '6px', fontSize: '0.9em',color:'#fff' }

export const Footer = () => {
   return (
      <div className="white-text footer" style={css}>
         <p>
            <strong>Copyright &copy; 2019 Distroku, All rights reserved.</strong>
         </p>
      </div>
   )
}