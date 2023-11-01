export function changeToClassName(tag, className) {
    tag.classList.remove(tag.classList.item(0));
    tag.classList.add(className);
}

export function typingEffect(screen, text, callback = null) {
    setTimeout(() => {
        const letters = text.split('');
        const lastIndex = letters.length - 1;
        let index = 0;
    
        screen.innerHTML = '';
        const animation = setInterval(
            () => {
                if(index === lastIndex + 2) {
                    clearInterval(animation);
                    
                    console.log(letters);
                    if (callback) {
                        callback(); // Llamar a la devolución de llamada cuando termine la animación
                    }
                } else if (index < lastIndex + 1) {
                    screen.innerHTML += letters[index];
                }

                index++;
            },
            150
        );
    }, 1000);
}