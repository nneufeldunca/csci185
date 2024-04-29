const button1 = document.querySelector("#s1")

function changeBackground() {
    // your code here
    button1
}

const button2 = document.querySelector("#message");

function goodbye() {
    // your code here
    button2.innerHTML = `<p>Goodbye</p>`;
}

const button3 = document.querySelector("#s3")

function showDog() {
    // your code here
    button3.innerHTML = ` 
    <h2>Part 3: Switch Image</h2>
    <p>When the user clicks the button below, switch the image so that it shows the cat image (located inthe images folder).</p>
    <button onclick="showDog('')">Show Dog</button>
    <img id="animal1" src="images/dog.jpg" />`
}
