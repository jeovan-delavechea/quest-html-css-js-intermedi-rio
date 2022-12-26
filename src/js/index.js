const dados = document.querySelectorAll('.dado')
const enviar = document.querySelector('.enviar')

dados.forEach((dado) =>{
    dado.addEventListener('change', () =>{
        if(dado.value !== ''){
            dado.parentElement.classList.remove('aviso')
            dado.classList.remove('vazio')
            dado.classList.add('preenchido')
        } else{dado.classList.remove('preenchido')}
    })
})

enviar.addEventListener('click', (event) =>{
    event.preventDefault()

    dados.forEach(dado =>{
        if(dado.value === ''){
            dado.classList.add('vazio')
            dado.parentElement.classList.add('aviso')
        }})
})