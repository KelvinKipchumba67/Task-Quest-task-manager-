// ===== Firebase Setup =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your Firebase config (replace with your own project keys)
  const firebaseConfig = {
    apiKey: "AIzaSyDD1m9R18y7KklktowIlpof800b8rCDZ5w",
    authDomain: "task-quest-b8aef.firebaseapp.com",
    projectId: "task-quest-b8aef",
    storageBucket: "task-quest-b8aef.firebasestorage.app",
    messagingSenderId: "824530751369",
    appId: "1:824530751369:web:0763380cd99faaba0b9b58",
    measurementId: "G-6490XHZR5B"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ===== Protect Dashboard =====
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // Not logged in → redirect
      window.location.href = "login.html";
      return;
    }

    console.log("✅ Logged in as:", user.email);

    // ===== Elements =====
    const todoList = document.getElementById("todo-list");
    const addTaskBtn = document.getElementById("add-task-btn");
    const newTaskInput = document.getElementById("new-task-input");

    // ===== Tasks State =====
    let tasks = JSON.parse(localStorage.getItem("taskquest_tasks")) || [];

    function saveTasks() {
      localStorage.setItem("taskquest_tasks", JSON.stringify(tasks));
      updateChart();
    }

    function renderTasks() {
      todoList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");
        li.innerHTML = `
          <input type="checkbox" ${task.completed ? "checked" : ""}>
          <span>${task.text}</span>
          <button class="remove-task">✖</button>
        `;

        // Toggle complete
        li.querySelector("input").addEventListener("change", () => {
          tasks[index].completed = !tasks[index].completed;
          saveTasks();
          renderTasks();
        });

        // Remove
        li.querySelector(".remove-task").addEventListener("click", () => {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        });

        todoList.appendChild(li);
      });
    }

    // Add new task
    addTaskBtn.addEventListener("click", () => {
      const val = newTaskInput.value.trim();
      if (val) {
        tasks.push({ text: val, completed: false });
        saveTasks();
        renderTasks();
        newTaskInput.value = "";
      }
    });

    newTaskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTaskBtn.click();
    });

    // ===== Chart =====
    let statsChart;
    function updateChart() {
      const completed = tasks.filter((t) => t.completed).length;
      const pending = tasks.length - completed;

      if (!statsChart) {
        statsChart = new Chart(document.getElementById("statsChart"), {
          type: "bar",
          data: {
            labels: ["Completed", "Pending"],
            datasets: [
              {
                label: "Tasks",
                data: [completed, pending],
                backgroundColor: ["#28a745", "#ffc107"],
                borderRadius: 8,
              },
            ],
          },
          options: {
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, precision: 0 } },
          },
        });
      } else {
        statsChart.data.datasets[0].data = [completed, pending];
        statsChart.update();
      }
    }

    // ===== Init =====
    renderTasks();
    updateChart();
  });
});
