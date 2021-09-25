let hello = document.querySelector("#hello");

function helloWorld(event) {
  alert("hello world");
}

hello.addEventListener("click", helloWorld);

// let byuButton = document.querySelector("#random")

const byuBtn = document.getElementById("random");
const cougDisplay = document.getElementById("cougarDisplay");

byuBtn.addEventListener("click", () => {
  axios
    .get("http://localhost:3000/api/famouscougs")
    .then((res) => {
      const cougList = document.createElement("li");

      cougList.textContent = res.data;
      cougDisplay.append(cougList);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
});

/*function {
    user tyes in name and last name
    user submits to  endpoint then via axios.post ->
        
            
               
        
}


*/
const byuField = document.getElementById("submitCoug");

byuField.addEventListener("click", (e) => {
  e.preventDefault();

  const addCougInput = document.getElementById("nameInput");
  console.log(addCougInput.value);
  axios
    .post("http://localhost:3000/api/famouscougs", {name: addCougInput.value})
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
});
