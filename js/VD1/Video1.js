const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let radius = 0; 
        let opacity = 0;
        let growing = true;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();

            if (growing) {
                radius += 2; 
                opacity += 0.02;
                if (radius >= 200) {
                    growing = false;  
                    opacity = 0;
                    setTimeout(() => {
                        radius = 0;  // Reset kích thước về 0
                        opacity = 0; 
                        growing = true; 
                    }, 500);
                }
            }

            requestAnimationFrame(draw);
        }

        draw();