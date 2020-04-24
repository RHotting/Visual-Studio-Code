var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://gateway-lon.watsonplatform.net/assistant/api', true)

request.onload = function() {
    // Begin accessing JSON data here
}

// Send request
request.send()