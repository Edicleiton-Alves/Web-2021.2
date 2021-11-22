window.properCase = () =>{
    var codificacao = document.getElementById('properCase').value;
    alert(`String convertida em Proper Case é '${codificacao.toLowerCase().replace(/^(.)|\s(.)/g, 
    function ($1) { return $1.toUpperCase(); })}'`);
}

window.reset = () =>{
  document.getElementById("properCase").value = "";
  document.getElementById("properCase").value = "";
}

export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <div class="card card--accent">
      <h2>Proper Case</h2>

      <label class="input">
        <p>Insira o texto abaixo</p>
        <input class="input__field" id="properCase" type="text" placeholder=" " />
      </label>
      
      <div class="button-group">
        <button onclick='properCase()'>Send</button>
        <button type="reset" onclick="reset();">Reset</button>
      </div>
    </div>  
  `

  return container; 
}