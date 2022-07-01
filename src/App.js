import React from 'react'

export const App = () => {
  const str = ['Navya','Ramya','Kavya','Bhavya','Sravya']
  return (
    <div>
      {
      str.map(
        (value,index) => <li key={index}>{value}</li>
      )
}
        </div>
  )
}
export default App;
