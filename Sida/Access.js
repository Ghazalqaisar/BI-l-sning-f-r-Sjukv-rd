
  var Mottagning = []; // en lista skapas
  var Ort= []; // en lista skapas
  var year15 = []; // en lista skapas
  var year16 = []; // en lista skapas
  var accessibility= []; // en lista skapas
  
  for (i = 0; i < vard.length; i++) {
    Mottagning.push(vard[i].Mottagning)

    Ort.push(vard[i].Ort)
 
    year15.push(vard[i].year15)
 
    year16.push(vard[i].year16)
  
    accessibility.push(vard[i].accessibility)
  }; 
   

var trace1 = {
  x: Mottagning,
  y: accessibility,
  name: 'Accessibility',
  type: 'bar'
};

var data = [trace1];
var layout = { 
title: 'Accessibility'
};

var config = {
      modeBarButtons: [[{
      name: 'stack',
      click: function(gd) {
      Plotly.relayout(gd, 'barmode', 'stack');
    }
  }, 
  {
    name: 'overlay',
    click: function(gd) {
    Plotly.relayout(gd, 'barmode', 'overlay');
    }
  }, 
  {
    name: 'group',
    click: function(gd) {
    Plotly.relayout(gd, 'barmode', 'group');
    }, 
  }, {
    name: 'relative',
    click: function(gd) {
    Plotly.relayout(gd, 'barmode', 'relative');
    }, 
  }].reverse()]
}

    Plotly.newPlot('graph', data, layout, config);


var trace4 = {
x: Mottagning, 
  y: accessibility,
  mode: 'lines+markers',
  name: 'accessibility',
  line: {shape: 'accessibility'},
  type: 'scatter'
};
var trace5 = {
  x: Mottagning, 
  y: year15, 
  mode: 'lines+markers', 
  name: 'Year 2015', 
  line: {shape: 'Year 2016'}, 
  type: 'scatter'
};

var trace6 = {
  x: Mottagning,
  y: year16, 
  mode: 'lines+markers', 
  name: 'Year 2016', 
  line: {shape: 'Year 2016'}, 
  type: 'scatter'
};

var data = [trace5, trace6, trace4];

 var layout = {legend: {
    y: 0.5, 
    traceorder: 'reversed', 
    font: {size: 16}, 
    yref: 'paper'
},
  Xaxis: {title: 'Mottagning'},
  yaxis: {title: 'Years'}};

  Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});

