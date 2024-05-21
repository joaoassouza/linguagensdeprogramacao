fetch("https://663c040017145c4d8c34f84e.mockapi.io/Animais")
  .then((response) => response.json())
  .then((data) => {
    const section2 = document.querySelector("#main section:nth-of-type(2)");

    data.forEach((animal) => {
      const paragraph = document.createElement("p"); 
      paragraph.textContent =
        animal.id +
        " - " +
        animal.nome +
        " - " +
        animal.idade +
        " - " +
        animal.raca; 
      section2.appendChild(paragraph); 
    });
  });

function adicionarDados() {
  const dados = {
    nome: "Totó",
    idade: 12,
    raca: "cachorro",
  };

  fetch("https://663c040017145c4d8c34f84e.mockapi.io/Animais", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ocorreu um erro ao adicionar os dados.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Dados adicionados com sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro ao adicionar os dados:", error);
    });
}

document.querySelector("#btn").onclick = adicionarDados;
