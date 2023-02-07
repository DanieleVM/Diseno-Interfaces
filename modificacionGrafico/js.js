/* chart.js chart examples */

// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
  datasets: [{
    data: [589, 445, 483, 503, 689, 692, 634],
    backgroundColor: 'transparent',
    borderColor: colors[0],
    borderWidth: 4,
    pointBackgroundColor: colors[0]
  }]
};


if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true
  }
  });
}

function anadirOpcionesSelect(){
  let select = document.getElementById("opcionesGrafico");

  select.innerHTML = "";

  let fragmento = new DocumentFragment;

  for(let valor of chartData.labels){
    let option = document.createElement("option")
    option.innerHTML = valor;
    fragmento.append(option);
  }

  select.append(fragmento);
}

anadirOpcionesSelect();

/*
Modificar valor grafico
*/

document.getElementById("modificar").addEventListener("click", (evento) => {

  const posicionAModificar = document.getElementById("opcionesGrafico").selectedIndex;
  const valorNuevo = document.getElementById("valor").value;

  // La primera parte es para acceder a los valores del grafico, que a estos le ponemos el nuevo valor
  chartData.datasets[0].data[posicionAModificar] = valorNuevo;

  if (chLine) {
    new Chart(chLine, {
    type: 'line',
    data: chartData,
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true
    }
    });
  }

})

/* Anadir valor nuevo al grafico */

document.getElementById("anadir").addEventListener("click", (evento) => {
  const nombre = document.getElementById("nombre").value;
  const valor = document.getElementById("valorNuevo").value;

  chartData.labels.push(nombre);
  chartData.datasets[0].data.push(Number(valor));

  if (chLine) {
    new Chart(chLine, {
    type: 'line',
    data: chartData,
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true
    }
    });
  }

  anadirOpcionesSelect();
  
})
