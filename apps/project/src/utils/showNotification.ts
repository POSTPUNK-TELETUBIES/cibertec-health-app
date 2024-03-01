export const showNotification = (message: string) => {
  if (!('Notification' in window)) {
    alert('Este navegador no soporta notificaciones')
  } else if (Notification.permission === 'granted') {
    new Notification(message)
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(message)
      }
    })
  }
}
