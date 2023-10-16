
console.log('JS Excuting');

async function increaseLikes(quoteId) {
    console.log(quoteId);
    response = await fetch(`/likes/${quoteId}`, {
        method: 'GET',
    })

    result = await response.json();
    if (result) {
        console.log(result);
        document.querySelector(`#LC${quoteId}`).textContent = result.likes;
    }

}

async function sendMail(mailId, quoteId) {
    console.log(quoteId);
    request_body = {
        mailId: mailId,
        quoteId: quoteId
    }
    document.querySelector('#loader').classList.remove('hide-loader')
    response = await fetch('/sendmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request_body)
    })
    document.querySelector('#loader').classList.add('hide-loader')
    alert('Mail sent');
}