const socket = io('ws://localhost:8080')

    socket.emit('passName', prompt())


socket.on('message', (text) => {
    const l = document.createElement('l')
    l.style.borderBottom = 'black solid 2px'
    l.style.padding = '10px'

    l.classList = 'list'
    l.textContent = text
    document.querySelector('ul').appendChild(l)
})

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('input').value

    socket.emit('message', (text))
}) 