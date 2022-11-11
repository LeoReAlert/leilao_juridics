function proximo(){
$('#proximo').submit(function(e){
  e.preventDefault()

Swal.fire({
    title: '<strong>Publicar <u>Leilão</u></strong>',
    icon: 'info',
    html:
      'Cadastro <b>Confirmado</b>, ' +
      '<a href="#">Parabéns!</a> ' +
      'Você está quase lá',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Confirmar!',
    confirmButtonAriaLabel: 'Confirmar cadastro',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })

})
}