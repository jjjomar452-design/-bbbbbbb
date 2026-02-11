const scriptURL = 'https://script.google.com/macros/s/AKfycbzBoH02NzRyBO63c_xHmJrBLuX99hhxRbpnWIIeMXATL6HJ13Vfh0z8j40IqvNOzCW9WA/exec' // Hot el URL mte3ek hna

const form = document.getElementById('contactForm')
const btn = document.getElementById('submitBtn')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    btn.disabled = true
    btn.innerHTML = "Envoi en cours..."

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) 
    })
    .then(response => {
        alert('Message envoyé avec succès !')
        btn.disabled = false
        btn.innerHTML = "Envoyer"
        form.reset() // efregh el form ba3d el envoi
    })
    .catch(error => {
        console.error('Error!', error.message)
        btn.disabled = false
        btn.innerHTML = "Envoyer"
        alert('Erreur lors de l\'envoi.')
    })
})