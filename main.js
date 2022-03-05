const gameSetup = () => {
    return (1);
}

const onStartGame = () => {
    const elem = document.getElementById("gameInit");
    elem.style.transitionDuration = "1s";
    elem.style.opacity = 0;
    elem.style.pointerEvents = "none";
}