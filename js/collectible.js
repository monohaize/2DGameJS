// Collectible class for coins or items
class Collectible {
    constructor(x, y, size) {
        this.x = x;         // Collectible's x position
        this.y = y;         // Collectible's y position
        this.size = size;   // Size of the collectible
        this.active = true; // Whether it's still collectible
    }

    // Draw collectible as a yellow circle
    draw(ctx) {
        if (this.active) {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(this.x + this.size / 2, this.y + this.size / 2, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Check collision with player
    checkCollision(player) {
        if (!this.active) return false;
        
        const collision = (
            player.x < this.x + this.size &&
            player.x + player.width > this.x &&
            player.y < this.y + this.size &&
            player.y + player.height > this.y
        );

        if (collision) {
            this.active = false;
            playCollectSound(); // Play sound from audio.js
            return true;
        }
        return false;
    }
}