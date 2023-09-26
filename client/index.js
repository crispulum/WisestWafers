import './index.html';


const form = document.getElementById('farm')
form.addEventListener('submit', (event) => {
    const glitterImage = document.querySelector('.glitter-image');

    // Remove any existing color classes
    const colorClasses = [
        'color-darker-1',
        'color-original',
        'color-brighter-1',
        'color-brighter-2',
    ];
    glitterImage.classList.remove(...colorClasses);

    // Add the glitter animation
    glitterImage.classList.add('glittering');

    // Set the duration for each color segment (0.25 seconds)
    const segmentDuration = 250; // 0.25 seconds

    // Remove the glitter effect after the animation (1.5 seconds for the entire sequence)
    setTimeout(() => {
        glitterImage.classList.remove('glittering');

        // Fetch data and handle the response
        const fortuneText = form.querySelector('[name="fortuneText"]').value;
        const requestData = { fortuneText };

        fetch('/fortuneText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(requestData), // Convert the object to JSON string
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data is: ')
                console.log(data)
                document.getElementById('revealed').innerHTML = data.fortuneText;
            })
            .catch((error) => {
                console.error('error in fortune fetch ', error)
            })
    }, 1500); // Wait for the entire sequence to complete (1.5 seconds)

    event.preventDefault();

    // Get the form input value
    const fortuneText = form.querySelector('[name="fortuneText"]').value;

    // Create an object with the correct shape
    const requestData = { fortuneText };

    // Set an interval to control the color changes (0.25 seconds per segment)
    const colorSequence = [
        'color-darker-1',
        'color-original',
        'color-brighter-1',
        'color-brighter-2',
        'color-brighter-1',
        'color-original',
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
        const currentColorClass = colorSequence[currentIndex];
        glitterImage.classList.remove(...colorClasses);
        glitterImage.classList.add(currentColorClass);

        currentIndex++;
        if (currentIndex >= colorSequence.length) {
            clearInterval(interval);
        }
    }, segmentDuration);
});