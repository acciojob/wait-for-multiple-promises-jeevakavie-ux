//your JS code here. If required.
const output = document.getElementById("output");

function createPromise() {
    return new Promise((resolve) => {
        const start = performance.now();

        const delay = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {
            const end = performance.now();
            const time = (end - start) / 1000;

            resolve(time);
        }, delay * 1000);
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

const startTime = performance.now();

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const totalTime = (performance.now() - startTime) / 1000;

        output.innerHTML = "";

        results.forEach((time, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            `;

            output.appendChild(row);
        });

        const totalRow = document.createElement("tr");

        totalRow.innerHTML = `
            <td>Total</td>
            <td>${totalTime.toFixed(3)}</td>
        `;

        output.appendChild(totalRow);
    });