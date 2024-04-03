const participante = {
  nome: "Henrique Ferreira Dantas",
  email: "henrique@gmail.com",
  data_inscricao: new Date(2024, 2, 22, 19, 20),
  data_check_in: new Date(2024, 2, 25, 22, 00)

}

let participantes = [
  {
    nome: "Henrique Ferreira Dantas",
    email: "henrique@gmail.com",
    data_inscricao: new Date(2024, 2, 22, 19, 20),
    data_check_in: new Date(2024, 2, 25, 22, 00)
  }
]

for(let participante of participantes) {
  output = output + criar_novo_participante(participante)
}