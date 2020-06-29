function rem() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 15.36 + 'px'
}
rem();
window.onresize = rem;