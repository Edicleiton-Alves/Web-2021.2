window.lowerCase = () =>{
    var result = document.getElementById('lowerCase').value;
    console.log(result.toUpperCase());
    alert("Valor em Uper Case é '" + result.toLowerCase() + "'");
}

window.reset = () =>{
  document.getElementById("lowerCase").value = "";
  document.getElementById("lowerCase").value = "";
}

export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <div class="card card--accent">
      <h2>Lower Case</h2>

      <label class="input">
        <p>Insira o texto abaixo</p>
        <input class="input__field" id="lowerCase" type="text" placeholder=" " />
      </label>
      
      <div class="button-group">
        <button onclick='lowerCase()'>Send</button>
        <button type="reset" onclick="reset();">Reset</button>
      </div>
    </div> 
  `

  return container; 
}