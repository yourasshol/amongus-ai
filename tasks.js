const tasks = [
    { name: "Fix Wiring", completed: false },
    { name: "Swipe Card", completed: false }
];

function completeTask(taskName) {
    const task = tasks.find(t => t.name === taskName);
    if (task) {
        task.completed = true;
        console.log(`${taskName} completed!`);
    }
}
