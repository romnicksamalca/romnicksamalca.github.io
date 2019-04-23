console.log('Javascript loaded')

$(document).ready(function (){
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Button clicked')

        var email = $('.email').val()
        var phone = $('.phone').val()
        var message = $('.message').val()
        var statusEml = $('.status')
        statusEml.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusEml.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusEml.append('<div>Email is not valid</div>')
        }

        if(phone.length >= 11) {
            statusEml.append('<div>Phone number is valid</div>')
        } else {
            event.preventDefault()
            statusEml.append('<div>Phone number is not valid</div>')
        }

        if(message.length >= 10) {
            statusEml.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusEml.append('<p>Message is not valid</p>')
        }
    })
})