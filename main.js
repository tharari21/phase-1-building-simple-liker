// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal");
const pModalMessage = document.querySelector("#modal-message");
const heartButtons = document.querySelectorAll(".like-glyph");

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
errorModal.classList.add("hidden");

// When a user clicks on an empty heart:
heartButtons.forEach((heartButton) => {
  heartButton.addEventListener("click", () => {
    let isLiked = heartButton.textContent === FULL_HEART;
    mimicServerCall()
      .then((message) => {
        if (isLiked) {
          heartButton.textContent = EMPTY_HEART;
          heartButton.classList.remove("activated-heart");
        } else {
          heartButton.textContent = FULL_HEART;
          heartButton.classList.add("activated-heart");
        }
      })
      .catch((message) => {
        errorModal.classList.remove("hidden");
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
        pModalMessage.textContent = message;
      });
  });
});
// Invoke mimicServerCall to simulate making a server request

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
