window.addEventListener("load", function () {

    let nodes = "404e404e404e404e404e404e404e404e";
    nodes = nodes.split("");
    let nodestoappend = document.querySelectorAll(".letters");

    nodes.forEach((e, i) => {
        let node = document.createElement("span");
        node.style.left = (Math.random() * 75 + 'vw');
        node.style.animationDelay = i + "s";
        node.innerText = '404';

        if (i == 3 || i == 7 || i == 11) {
            console.log('e', i);
            node.style.left = (50 + 'vw');
            node.style.animationDelay = i + "s";
            node.innerText = 'E r r o r';
        }

        nodestoappend[0].appendChild(node);

    });

});
