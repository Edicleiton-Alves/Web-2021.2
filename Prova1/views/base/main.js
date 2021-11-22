window.base64 = () =>{
  var result = document.getElementById('base').value;
  var converBase = window.btoa(unescape(encodeURIComponent(result)))
  console.log(converBase);
  alert("Valor em Base 64 Codificado é '" + converBase + "'");

  var initialBase = window.atob(unescape(encodeURIComponent(converBase)))
  console.log(initialBase);
  alert("Valor em Base 64 Descodificado é '" + initialBase + "'");
}

window.reset = () =>{
  document.getElementById("base").value = "";
  document.getElementById("base").value = "";
}

export default () => {
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <div class="card card--accent">
      <h2>Base 64</h2>

      <label class="input">
        <p>Insira o texto abaixo</p>
        <input class="input__field" id="base" type="text" placeholder=" " />
      </label>
      
      <div class="button-group">
        <button onclick='base64()'>Send</button>
        <button type="reset" onclick="reset();">Reset</button>
      </div>
    </div>
  `
  return container; 
}