let userData = {
  name: "Steve",
  email: "steve@steve.com",
};

function submitData() {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function(error){
        alert(`Error!`)
        console.log(error.message);
    })
}
submitData();
