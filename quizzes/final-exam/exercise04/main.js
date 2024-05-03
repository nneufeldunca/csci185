// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    courseList = await fetch(url).then(response => response.json());
    displayResults(courseList);
} 

const myElement = document.querySelector("#results");

function displayResults(courses) {
    // your code here.
    console.log(courses);
    for (let i = 0; i < courseList.length; i++) {

        if (courses[i].Department === "CSCI") {
            const template = `
        <section class="course">
            <h2>${courses[i].Title} ${courses[i].Code}</h2>
            <p>
                ${courses[i].Days} ${courses[i].Location.FullLocation} &bull; ${courses[i].Hours}
            </p>
            <p><strong>${courses[i].Instructors[0].Name}</strong></p>
        </section>
        `


            myElement.insertAdjacentHTML('beforeend', template);

            console.log(courses[i].Title)
        }
    }
}