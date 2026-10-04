export function renderResults(containerId, results) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = results
        .map((result) => `<p class="output-line">${result}</p>`)
        .join("");
}