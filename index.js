
let participantes = [
  {
    nome: "Henrique Ferreira Dantas",
    email: "henrique@gmail.com",
    data_inscricao: new Date(2024, 2, 22, 19, 20),
    data_check_in: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Maria da Silva",
    email: "maria@gmail.com",
    data_inscricao: new Date(2024, 2, 23, 10, 30),
    data_check_in: new Date(2024, 2, 26, 15, 45)
  },
  {
    nome: "José Santos",
    email: "jose@gmail.com",
    data_inscricao: new Date(2024, 2, 24, 14, 50),
    data_check_in: new Date(2024, 2, 27, 18, 10)
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    data_inscricao: new Date(2024, 2, 25, 16, 15),
    data_check_in: null
  },
  {
    nome: "Paulo Oliveira",
    email: "paulo@gmail.com",
    data_inscricao: new Date(2024, 2, 26, 18, 40),
    data_check_in: new Date(2024, 2, 29, 22, 55)
  },
  {
    nome: "Carla Costa",
    email: "carla@gmail.com",
    data_inscricao: new Date(2024, 2, 27, 20, 5),
    data_check_in: new Date(2024, 3, 1, 10, 20)
  },
  {
    nome: "Ricardo Santos",
    email: "ricardo@gmail.com",
    data_inscricao: new Date(2024, 2, 28, 22, 30),
    data_check_in: new Date(2024, 3, 2, 12, 45)
  },
  {
    nome: "Fernanda Lima",
    email: "fernanda@gmail.com",
    data_inscricao: new Date(2024, 2, 29, 12, 15),
    data_check_in: new Date(2024, 3, 3, 16, 30)
  },
  {
    nome: "Daniel Pereira",
    email: "daniel@gmail.com",
    data_inscricao: new Date(2024, 2, 30, 9, 40),
    data_check_in: new Date(2024, 3, 4, 14, 55)
  },
  {
    nome: "Amanda Castro",
    email: "amanda@gmail.com",
    data_inscricao: new Date(2024, 2, 31, 15, 20),
    data_check_in: new Date(2024, 3, 5, 18, 45)
  }
]


const criar_novo_participante = (participante) => {
  
  const data_inscricao = dayjs(Date.now()).to(participante.data_inscricao)
  let data_check_in = dayjs(Date.now()).to(participante.data_check_in)

  if (participante.data_check_in == null) {
    data_check_in = `
    
    <button data-email="${participante.email}" onclick="fazer_check_in(event)"> Confirmar check-in
    </button>
    `
  }
  
  return `
    <tbody>
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>

      <td>${data_inscricao}</td>
      <td>${data_check_in}</td>
    </tr>
  </tbody>
  `
}

const atualizar_lista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criar_novo_participante(participante)
  }

  // substituir informações do html
  document.querySelector('tbody').innerHTML = output
}

atualizar_lista(participantes)

const adicionar_participante =(event) => {
  event.preventDefault()

  const dados_formulario = new FormData(event.target)

  const participante = {
    nome: dados_formulario.get('nome'),
    email: dados_formulario.get('email'),
    data_inscricao: new Date(),
    data_check_in: null
  }

  //verifica se o participante ja existe
  const participante_existente = participantes.find((p) => {
    return p.email == participante.email
  })

  if(participante_existente) {
    alert('Email já cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizar_lista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('name="email"').value = ""

}

const fazer_check_in = (event) => {
  // confirmar se realmente quer  o check-in
  const mensagem_confirmacao = 'Tem certeza que deseja fazer o check-in?'

  if (confirm(mensagem_confirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })

  // atualizar check-in do participante
  participante.data_check_in = new Date()
  
  // atualizar a lista de participantes
  atualizar_lista(participantes)
}