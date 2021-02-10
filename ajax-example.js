// find the button on the page, store its reference in a variable
const dogButton = document.getElementById("dogButton");

// add 'click' listener to the button
dogButton.addEventListener("click", () => {
    // update text of button
    dogButton.innerHTML = "Generating Doggo..."
    //https://dog.ceo/api/breeds/image/random
    console.log('1')
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json()) //once response comes back, parse response from JSON
        .then((data) => {
            // create a new image element
            const dogImg = document.createElement('img');
            // use the data from the response to set image src attribute
            dogImg.setAttribute('src', data.message)
            // set a width so the images aren't too large
            dogImg.setAttribute("width", 500)
            // find the dogContainer element
            const dogContainer = document.querySelector('#dogContainer')
            // empty out the container to remove any other images
            dogContainer.innerHTML = "";
            // append the newly created dog image element into the dogContainer
            document.body.append(dogImg)
            dogButton.innerHTML = "Done Son!"
        })
        // if anything goes wrong, log error to console
        .catch((error) => {
            alert('Failed to generate Doggo.')
            console.log(error);
        });
})