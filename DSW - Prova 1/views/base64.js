export default () =>{
    const container = document.createElement("div");
    container.classList.add("container");

        container.innerHTML = `
            <h1>Conversão para Base 64</h1>
            <p>Digite aqui:</p>
            <input id="base64" type="text"></input>
            <button class="button" onclick="base64()">Enviar</button>
        `
    
    return container;
}