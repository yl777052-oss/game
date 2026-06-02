* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #1a1a2e;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.game-container {
    text-align: center;
    background: #161623;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    letter-spacing: 3px;
    color: #00ffcc;
    text-shadow: 0 0 10px #00ffcc;
}

.score-board {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    font-size: 1.1rem;
}

.score-box {
    background: rgba(255, 255, 255, 0.05);
    padding: 8px 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

#current-score {
    color: #ff007f;
    font-weight: bold;
}

#high-score {
    color: #00ffcc;
    font-weight: bold;
}

canvas {
    background-color: #0f0f1a;
    border: 4px solid #00ffcc;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    display: block;
    margin: 0 auto;
}

.controls-hint {
    margin-top: 15px;
    font-size: 0.9rem;
    color: #888;
}

button {
    margin-top: 20px;
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: bold;
    color: #161623;
    background: #00ffcc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
}

button:hover {
    background: #ff007f;
    color: #fff;
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.6);
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
}
