window.upperCase = () =>{
  var result = document.getElementById('upperCase').value;
  console.log(result.toUpperCase());
  alert("Valor em Uper Case é '" + result.toUpperCase() + "'");
}

window.reset = () =>{
  document.getElementById("upperCase").value = "";
  document.getElementById("upperCase").value = "";
}

export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <div class="card card--accent">
      <h2>Upper Case</h2>

      <label class="input">
        <p>Insira o texto abaixo</p>
        <input class="input__field" id="upperCase" type="text" placeholder=" " />
      </label>
      
      <div class="button-group">
        <button onclick='upperCase()'>Send</button>
        <button type="reset" onclick="reset();">Reset</button>
      </div>
    </div>   
  `

  return container; 
}