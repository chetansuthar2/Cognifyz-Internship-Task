
const button = document.getElementById("fetchDataBtn");
const dataContainer = document.getElementById("dataContainer");

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        let data = await response.json();

        dataContainer.innerHTML = "";

        data.forEach(post => {
            let postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            dataContainer.appendChild(postElement);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
        dataContainer.innerHTML = "<p style='color: red;'>Failed to load data. Try again.</p>";
    }
}

button.addEventListener("click", fetchData);
