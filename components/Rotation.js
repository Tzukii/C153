AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
        speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "D") {
                if (this.data.speedOfRotation < 0.1) {
                    this.data.speedOfRotation += 0.1;
                }
            }

            if (e.key === "A") {
                if (this.data.speedOfRotation > -0.1) {
                    this.data.speedOfRotation -= 0.1;
                }
            }
        });
    },

    tick: function () {
        var mapRotation = this.el.getAttribute("rotation");

        mapRotation.y += this.data.speedOfRotation;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z,
        });
    },
});

AFRAME.registerComponent("plane-rotation-reader", {
    schema: {
        speedOfRotation: { type: "number", default: 0 },
        speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            this.data.speedOfRotation = this.el.getAttribute("rotation");
            this.data.speedOfAscent = this.el.getAttribute("position");

            var planeRotation = this.data.speedOfRotation;
            var planePosition = this.data.speedOfAscent;

            if (e.key === "D") {
                if (planeRotation.x < 10) {
                    planeRotation.x += 0.5;
                    this.el.setAttribute("rotation", planeRotation)
                }
            }
            if (e.key === "A") {
                if (planeRotation.x > -10) {
                    planeRotation.x -= 0.5;
                    this.el.setAttribute("rotation", planeRotation)
                }
            }
            if (e.key === "W") {
                if (planeRotation.z < 20) {
                    planeRotation.x += 0.5;
                    this.el.setAttribute("rotation", planeRotation)
                }
                if (planePosition.y < 2) {
                    planePosition.y += 0.01;
                    this.el.setAttribute("position", planePosition)
                }
            }
            if (e.key === "S") {
                if (planeRotation.z > -100) {
                    planeRotation.x -= 0.5;
                    this.el.setAttribute("rotation", planeRotation)
                }
                if (planePosition.y > -2) {
                    planePosition.y -= 0.01;
                    this.el.setAttribute("position", planePosition)
                }
            }
        });
    },
});