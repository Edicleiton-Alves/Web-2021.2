window.capitalCase = () =>{
  var cod = document.getElementById('capitalCase').value;
  var cod2;
  cod2 = cod.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
  alert(`String convertida em Capital Case é '${cod2}'`);
}

window.reset = () =>{
  document.getElementById("capitalCase").value = "";
  document.getElementById("capitalCase").value = "";
}

export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <div class="card card--accent">
      <h2>Capital Case</h2>

    <label class="input">
      <p>Insira o texto abaixo</p>
      <input class="input__field" id="capitalCase" type="text" placeholder=" " />
    </label>
    
    <div class="button-group">
      <button onclick='capitalCase()'>Send</button>
      <button type="reset" onclick="reset();">Reset</button>
    </div>
  </div>
  `

  return container; 
}