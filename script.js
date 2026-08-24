//your JS code here. If required.
const output = document.getElementById("output");

output.innerHTML = `
    <tr>
	    <td colspan="2">Loading...</td>
		</tr>
`;

function createPromise() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {
            resolve(delay);
        }, delay * 1000);
    });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

const startTime = performance.now();

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        
         output.innerHTML = "";

        results.forEach((time, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            `;

            output.appendChild(row);
        });

		const total = Math.max(...results);

        const totalRow= document.createElement("tr");

        totalRow.innerHTML = `
            <td>Total</td>
            <td>${total.toFixed(3)}</td>
        `;

        output.appendChild(totalRow);
 });