AFRAME.registerComponent("birds", {
    init: function () {
        for (var i = 1; i <= 40; i++) {
            var id = `obstacles${i}`;

            var posX = (Math.random() * 3000 + (-1000));
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + (-1000));

            var position = { x: posX, y: posY, z: posZ };

            this.createBirds(id, position);
        }
    },

    createBirds: function (id, position) {
        var birdEl = document.createElement("a-entity");
        var terrainEl = document.querySelector("#terrain")

        birdEl.setAttribute("id", id);
        birdEl.setAttribute("position", position);
        birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

        birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

        birdEl.setAttribute("animation-mixer", {});

        terrainEl.appendChild(birdEl);
    }
})