class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocityY = 0;
        this.speed = 5; // From player.js
        this.jumpPower = -15; // From game.js
        this.gravity = 0.5; // From game.js
        this.onGround = false; // From game.js (instead of isJumping)
    }

    draw(ctx, sprites) {
        // ctx.fillStyle = 'blue'; // From game.js
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            sprites.player,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    update(canvas, platforms, keys) {
        // Apply gravity
        this.velocityY += this.gravity;
        this.y += this.velocityY;

        // Horizontal movement (from player.js)
        if (keys.left) this.x -= this.speed;
        if (keys.right) this.x += this.speed;

        // Keep player within horizontal bounds (from player.js)
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;

        // Collision check with ground (from game.js)
        if (this.y + this.height > canvas.height - 20) { // Assuming ground height is 20
            this.y = canvas.height - 20 - this.height;
            this.velocityY = 0;
            this.onGround = true;
        } else {
            this.onGround = false;
        }

        // Collision detection with platforms (from game.js)
        platforms.forEach(platform => {
            if (
                this.y + this.height > platform.y &&
                this.y + this.height - this.velocityY <= platform.y &&
                this.x + this.width > platform.x &&
                this.x < platform.x + platform.width
            ) {
                this.y = platform.y - this.height;
                this.velocityY = 0;
                this.onGround = true;
            }
        });

        // Allow jumping only when on the ground (from game.js)
        if (keys.up && this.onGround) {
            this.velocityY = this.jumpPower;
            this.onGround = false;
            playJumpSound(); // From player.js
        }
    }
}