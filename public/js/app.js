const weatherForm = document.querySelector('form')
const search = document.querySelector('Input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
        return
      }
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
    })
  })
})
