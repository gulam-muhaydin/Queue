let queue = [];

function enqueue() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();
    
    if (item) {
        queue.push(item);
        itemInput.value = '';
        updateQueueDisplay();
    } else {
        alert('Please enter a valid item.');
    }
}

function dequeue() {
    if (queue.length > 0) {
        queue.shift();
        updateQueueDisplay();
    } else {
        alert('The queue is empty.');
    }
}

function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = '';

    queue.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}: ${item}`;
        queueList.appendChild(li);
    });
}
