// generate items
let counter=0;
function getData() {
  return new Promise((resolve, _reject) => {
    const data = Array(20).fill(0).map(_item => {
      return ({
        id: ++counter,
        title: `List Item ${counter}`
      });
    });
    resolve(data);
  });
}

const container = document.getElementById("container");

function fetchAndPopulateContainer() {
  getData().then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = item.title;
      container.appendChild(li);
    });
  });
}

// populate list with initial data
fetchAndPopulateContainer();

document.addEventListener("scroll", (_event) => {
  const element = document.documentElement;
  
  if(Math.abs(element.scrollHeight - (element.scrollTop + element.clientHeight)) < 1) {
    // hit the bottom
    fetchAndPopulateContainer();
  }
});

// for any other element apart from dom, the below logic should be fine
// domElement.addEventListener("scroll", (event) => {
//   const element = event.target;
  
//   if(Math.abs(element.scrollHeight - (element.scrollTop + element.clientHeight)) < 1) {
//     // hit the bottom
//     fetchAndPopulateContainer();
//   }
// });

