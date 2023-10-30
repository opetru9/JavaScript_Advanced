class Body{
    render(root) {
        root.innerHTML += `
        <div style="
            width: 64px;
            height: 64px;
            background-image: url(img/snake/snake-graphics.png);
            background-position: -128px -64px;
            "></div>
        `
    }
}