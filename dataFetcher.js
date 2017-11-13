fetch('public/data/MOCK_DATA.json')
  .then( response => response.json()
  )
  .then(data=>{
    console.log(data)
  })
  .catch(err=>console.log(err));