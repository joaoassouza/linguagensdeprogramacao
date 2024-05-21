//comentários e código por João Sobrinho

let url = "https://663c040017145c4d8c34f84e.mockapi.io/pessoas";
lista = document.querySelector("#listaClientes");

// mostrar os clientes na tela:
fetch(url)
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      let li = document.createElement("li");
      let a = document.createElement("a");

      li.classList.add("cliente");

      a.innerHTML = element.id + " - " + element.name + " - " + element.idade;
      a.href = `consultar.html?id=${element.id}`;

      li.appendChild(a);
      lista.appendChild(li);
    })
  );

//função de cadastro de clientes:
function cadastrarCliente() {
  let _nome = document.querySelector("#name").value;
  let _email = document.querySelector("#email").value;
  let _idade = document.querySelector("#idade").value;

  let novoCliente = {
    name: _nome,
    email: _email,
    idade: _idade,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoCliente),
  })
    .then((response) => response.json())
    .then((data) => {
      let li = document.createElement("li");
      li.innerHTML = data.id + " - " + data.name + " - " + data.idade;
      li.classList.add("cliente");
      lista.appendChild(li);

      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#idade").value = "";
    });

  alert("Cadastrado com sucesso!");
}

//funcao achar cliente por id
function procurarCliente(event) {
  event.preventDefault();
  let _id = document.querySelector("#search").value;
  let clienteView = document.querySelector("#searchCliente");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let clienteEncontrado = data.find((element) => element.id == _id);

      if (clienteEncontrado) {
        clienteView.classList.add("cliente");
        clienteView.innerHTML = `${clienteEncontrado.id} - ${clienteEncontrado.name} - ${clienteEncontrado.idade}`;
      } else {
        clienteView.innerHTML = "Cliente não encontrado.";
      }
    })
    .catch((error) => console.error("Erro ao procurar cliente:", error));
}
