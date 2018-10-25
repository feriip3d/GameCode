function classToggle() {
  const uls = document.querySelectorAll('.menu_botao')
  
  uls.forEach(ul => ul.classList.toggle('menu_botao_show'));
}

document.querySelector('.menu_icone_resp').addEventListener('click', classToggle);