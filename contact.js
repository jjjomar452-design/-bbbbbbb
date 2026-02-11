const scriptURL = 'https://script.google.com/macros/s/AKfycbx6I0PPB5STxtPgWYdluKColGykfxhJgy9NjzcsuQUQpn1w944EDDu56QHQbGXG6rjIxQ/exec' // Hot el URL mte3ek hna

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
