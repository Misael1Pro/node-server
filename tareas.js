const readline = require('readline-sync');

// Inicializa una lista de tareas vacía
const tasks = [];

// Función para mostrar la lista de tareas
function showTasks() {
  if (tasks.length === 0) {
    console.log('No hay tareas en la lista.');
  } else {
    console.log('Lista de Tareas:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Función para agregar una tarea a la lista
function addTask() {
  const task = readline.question('Ingrese una nueva tarea: ');
  tasks.push(task);
  console.log(`Tarea "${task}" agregada.`);
}

// Función para eliminar una tarea de la lista
function removeTask() {
  showTasks();
  const index = readline.question('Ingrese el número de la tarea que desea eliminar: ');

  if (index >= 1 && index <= tasks.length) {
    const removedTask = tasks.splice(index - 1, 1);
    console.log(`Tarea "${removedTask}" eliminada.`);
  } else {
    console.log('Número de tarea inválido.');
  }
}

// Bucle principal
while (true) {
  console.log('\nOpciones:');
  console.log('1. Mostrar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Salir');
  
  const option = readline.question('Seleccione una opción: ');

  switch (option) {
    case '1':
      showTasks();
      break;
    case '2':
      addTask();
      break;
    case '3':
      removeTask();
      break;
    case '4':
      console.log('Saliendo del programa.');
      process.exit(0);
    default:
      console.log('Opción no válida.');
  }
}
