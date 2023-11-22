async function fetchRoot() {
  const response = await fetch('http://localhost:5500/')
    .then((response) => {
      return response.json()
    }).catch((error) => {
      console.log(error)
      return null
    })

  console.log(response)
}
function redirectToSignup(userType) {
  if (userType === 'citizen') {
      document.getElementById('citizenSignupForm').style.display = 'block';
      document.getElementById('policeSignupForm').style.display = 'none';
  } else if (userType === 'police') {
      document.getElementById('citizenSignupForm').style.display = 'none';
      document.getElementById('policeSignupForm').style.display = 'block';
  }

  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  
}
