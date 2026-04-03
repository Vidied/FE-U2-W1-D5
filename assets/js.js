document.addEventListener('DOMContentLoaded', function() {
    const m= document.querySelectorAll('svg g[opacity]');
    if (m.length >0) {
        setInterval(() => {
            const random = Math.floor(Math.random()* m.lenght);
            const scelto = m[random]
            const opaco = scelto.getAttribute('opacity')
scelto.setAttribute('opacity', opaco === '1" ? "0" : "1"); 
        },150)
    }
})