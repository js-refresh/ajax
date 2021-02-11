function replaceImage(ImageUrl) {
    const dogImg = document.createElement('img');
    dogImg.setAttribute("src", ImageUrl);
    dogImg.setAttribute("width", 300);
    const dogContainer = document.querySelector("#dogContainer");
    dogContainer.innerHTML = "";
    dogContainer.append(dogImg);
}

// find the button on the page, store its reference in a variable
const dogButton = document.getElementById("dogButton");

// add 'click' listener to the button
dogButton.addEventListener("click", () => {
    // update text of button
    dogButton.innerHTML = "Generating Doggo..."
    //https://dog.ceo/api/breeds/image/random
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json()) //once response comes back, parse response from JSON
        .then((data) => {
            replaceImage(data.message)
            dogButton.innerHTML = oldText;
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
    
    const select = document.getElementById('dogSelect')

    fetch('https://dog.ceo/api/breeds/list')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.message.length; i++) {
                const name = data.message[i];
                const option = document.createElement('option')
                option.innerText = name;
                select.append(option);
            }
        })
    
select.addEventListener('change', () => {
        console.log(select.value)

        fetch (`https://dog.ceo/api/breed/${select.value}/images/random`)
            .then(res => res.json())
            .then(data => {
                replaceImage(data.message)
            })
    })
})
