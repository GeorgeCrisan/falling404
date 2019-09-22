window.addEventListener("load", function () {

    let nodes = "404e";
    nodes = nodes.split("").filter((el) => {
        return el !== " ";
    });

    let nodestoappend = document.querySelectorAll(".letters");

    nodes.forEach((e, i) => {
        let node = document.createElement("span");
        node.style.left = (Math.random() * 75 + 'vw');
        node.style.animationDelay = i + "s";
        node.innerText = e;

        if (i === 3) {
            node.style.left = (50 + 'vw');
            node.style.animationDelay = i + "s";
            node.innerText = 'error';
        }

        nodestoappend[0].appendChild(node);

    });

});
