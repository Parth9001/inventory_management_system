import React from 'react'

export default function AuditPageBar() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: 970, height: 60, left: 0, top: 1, position: 'absolute', background: '#042453', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottom: '3px white solid'}} />
      <div style={{width: 170, height: 34, left: 547, top: 8, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Date & Time </div>
      <div style={{width: 120, height: 34, left: 804, top: 8, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Quantity</div>
      <div style={{width: 50, height: 0, left: 512, top: 50, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px white solid'}}></div>
      <div style={{width: 50, height: 0, left: 752, top: 50, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '2px white solid'}}></div>
      <div style={{width: 150, height: 34, left: 181, top: 8, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Garamond', fontWeight: '700', wordWrap: 'break-word'}}>Issued By</div>
  </div>
  )
}
