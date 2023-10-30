class Tail {
    render(root) {
        root.innerHTML += `
        <div style="
            width: 64px;
            height: 64px;
            background-image: url(img/snake/snake-graphics.png);
            background-position: -192px -128px;
            "></div>`
    }
}