
function break_stick_into(n) {
  // n is the number of pieces to break the stick into
  // returns an array of n pieces sorted in ascending order of length
  let breaks = [0.0]; 
  for (let i=0; i<n-1; i++) {
    breaks.push(Math.random());     
  }
  breaks.push(1.0); 
  breaks.sort(); 
  let lengths = []; 
  for (let i=0; i<n; i++) {
    lengths.push( breaks[i+1]-breaks[i] );
  }
  lengths.sort(); 
  return lengths; 
}

function is_triangle(a,b,c) {
  // Check the triangle inequality theorem
  return (a + b > c && a + c > b && b + c > a) ? true : false; 
}

function is_tetrahedron(a,b,c,d,e,f) {
  if ( !is_triangle(a,b,c) || !is_triangle(a,d,e) ) { return false; }

  t1 = ( (e*e+b*b-c*c-d*d)*(e*e+b*b-c*c-d*d) )/(4.0*a*a); 
  t2 = Math.sqrt( d*d - ((e*e-a*a-d*d)/(-2.0*a))*((e*e-a*a-d*d)/(-2.0*a)) );
  t3 = Math.sqrt( b*b - ((c*c-a*a-b*b)/(-2.0*a))*((c*c-a*a-b*b)/(-2.0*a)) );
  fmin = Math.sqrt( t1+(t2-t3)*(t2-t3) );
  if (f <= fmin) { return false; }
  fmax = Math.sqrt( t1+(t2+t3)*(t2+t3) );
  if (f >= fmax) { return false; }
  return true; 
}

function simulate_breaks() {
  const simdiv = document.getElementById('simulatordiv'); 
  N = 100000; 
  tetra_count = 0; 
  for (let iteration=0; iteration < N; iteration++) {
    let [a,b,c,d,e,f] = break_stick_into(6); 
    // Check the seven fundamental tetrahedra
    if (  is_tetrahedron( a,b,c,d,e,f ) || 
          is_tetrahedron( a,b,c,d,f,e ) || 
          is_tetrahedron( a,b,c,e,d,f ) || 
          is_tetrahedron( a,b,c,e,f,d ) || 
          is_tetrahedron( a,b,d,e,c,f ) || 
          is_tetrahedron( a,b,d,e,f,c ) || 
          is_tetrahedron( a,c,d,e,f,b ) ) {
            tetra_count ++; 
    }
  }
}


// Simulation of breaking sticks 
google.charts.load('current', {packages: ['corechart', 'line']});

var sim_running = false; 
var simulation_data; 
var simulation_iteration = 0; 
var tetra_count = 0; 
function run_simulation() {

  if (!sim_running) return; 

  if (simulation_data == undefined) {
    simulation_data = new google.visualization.DataTable();
    simulation_data.addColumn('number', 'iteration');
    simulation_data.addColumn('number', '% tetrahedra');
  }

  simulation_iteration++;

  // Simulate breaking stick 
  let [a,b,c,d,e,f] = break_stick_into(6); 
    // Check the seven fundamental tetrahedra
    if (  is_tetrahedron( a,b,c,d,e,f ) || 
          is_tetrahedron( a,b,c,d,f,e ) || 
          is_tetrahedron( a,b,c,e,d,f ) || 
          is_tetrahedron( a,b,c,e,f,d ) || 
          is_tetrahedron( a,b,d,e,c,f ) || 
          is_tetrahedron( a,b,d,e,f,c ) || 
          is_tetrahedron( a,c,d,e,f,b ) ) {
            tetra_count ++; 
    }

    if (simulation_iteration > 50 && simulation_iteration%20 == 0) { 
      simulation_data.addRows([  [simulation_iteration, 100*tetra_count / simulation_iteration ]  ]);
      var options = {
        hAxis: {
          title: 'Iterations'
        },
        vAxis: {
          title: '% Tetrahedron Success'
        }, 
        legend: {position: 'none'}, 
        title: 100*tetra_count / simulation_iteration, 
      };
    
        var chart = new google.visualization.LineChart(document.getElementById('simulatordiv'));
    
        chart.draw(simulation_data, options);

    }

  setTimeout(function(){run_simulation()},0);
}

function toggle_simulation() {
  if (sim_running) {
    sim_running = false; 
    document.getElementById('simulation_button').innerText = 'Run Simulation'; 
  } else {
    sim_running = true; 
    document.getElementById('simulation_button').innerText = 'Stop Simulation'; 
    run_simulation(); 
  }
}

