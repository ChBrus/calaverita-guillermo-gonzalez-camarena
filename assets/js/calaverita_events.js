export function changeDisplayTo(tag, display) {
    if (display.length === 0) display = 'none';

    tag.style.display = display;
}