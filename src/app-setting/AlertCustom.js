import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// export const toastLogin = Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

export const showStatus = (
  type = '',
  title = '',
  text = '',
  footer = ''
) =>Swal.fire({
    icon: type,
    title: title,
    text: text,
    toast: true,
    footer: footer,
    showCloseButton: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  })