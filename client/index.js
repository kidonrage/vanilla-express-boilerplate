import './styles.css'

console.log("JavaScript is working!")

const $apiMessageParagraph = document.getElementById('api-message')

fetch('/api/')
  .then(response => response.json())
  .then(response => {
    $apiMessageParagraph.innerText = response.message
  })
  .catch(error => {
    $apiMessageParagraph.innerText = `Oops! There is been an error while fetching data from server: ${error}`
  })