const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let width = 0;
        const maxWidth = canvas.width * 0.7;
        const height = 200;
        let x = (canvas.width - maxWidth) / 2;
        let y = canvas.height / 2 + height / 2; // Căn giữa theo chiều dọc
        let skew = 200;
        let colorIndex = 0;
        const colors = ['red', 'blue', 'green', 'purple', 'orange'];

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let gradient = ctx.createLinearGradient(x, y, x + width, y);
            gradient.addColorStop(0, colors[colorIndex]);
            gradient.addColorStop(1, 'white');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width - skew, y - height);
            ctx.lineTo(x - skew, y - height);
            ctx.closePath();
            ctx.fill();

            if (width < maxWidth) {
                width += 5;
            } else {
                width = 0;
                colorIndex = (colorIndex + 1) % colors.length;
            }

            requestAnimationFrame(draw);
        }

        draw();