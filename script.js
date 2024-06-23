document.getElementById('text-input').addEventListener('input', updateCounts);

function updateCounts() {
    const text = document.getElementById('text-input').value;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const charCount = text.length;

    const numberCount = (text.match(/\d/g) || []).length;

    const specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    const spaceCount = (text.match(/\s/g) || []).length;

    document.getElementById('word-count').innerText = wordCount;
    document.getElementById('char-count').innerText = charCount;
    document.getElementById('number-count').innerText = numberCount;
    document.getElementById('special-char-count').innerText = specialCharCount;
    document.getElementById('space-count').innerText = spaceCount;
}
