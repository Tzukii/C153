AFRAME.registerComponent("target-ring", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `ring${i}`;

            var posX = (Math.random() * 3000 + (-1000));
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + (-1000));

            var position = { x: posX, y: posY, z: posZ };

            this.createRings(id, position);
        }
    },

    createRings: function (id, position) {
        var ringEl = document.createElement("a-entity");
        var terrainEl = document.querySelector("#terrain")

        ringEl.setAttribute("id", id);
        ringEl.setAttribute("position", position);

        ringEl.setAttribute("material", "color", "#ff9100");
        ringEl.setAttribute("geometry", { primitive: "torus", radius: 8 });

        terrainEl.appendChild(ringEl);
    }
})