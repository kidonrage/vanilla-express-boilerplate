import './styles.css'

console.log("JavaScript is working!")

const $apiMessageParagraph = document.getElementById('api-message')

fetch('/api/')
  .then(response => response.json())
  .then(response => {
    $apiMessageParagraph.innerText = response.message
  })