import React from 'react'

export const App = () => {
  const names =['navya','ramya','swathi','radha'];
  const filtered= names.filter(name => name.includes('r'))
  return (
    <div>
      {
        filtered.map(item => <li>{item}</li>)
      }
    </div>
  )
}
export default App;
