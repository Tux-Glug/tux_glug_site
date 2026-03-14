const videos = [
  {
    id: "starfield-simulation",
    title: "Starfield Simulation in JavaScript",
    youtubeUrl: "https://www.youtube.com/watch?v=2g811Eo7K8U",
    videoId: "2g811Eo7K8U",
    creator: "The Coding Train",
    topics: ["javascript", "animation", "space"],
    publishedAt: "2026-02-15",
    tutorial: "In this tutorial, we'll create a classic starfield effect. Start by setting up your canvas and creating a Star class with x, y, and z coordinates. The key is to map the z coordinate to both size and brightness. As stars move toward the viewer (decrease in z), they get larger and brighter."
  },
  {
    id: "snake-game-p5",
    title: "Snake Game with p5.js",
    youtubeUrl: "https://www.youtube.com/watch?v=AaGK-fj-AAM",
    videoId: "AaGK-fj-AAM",
    creator: "The Coding Train",
    topics: ["javascript", "game", "p5.js"],
    publishedAt: "2026-02-10",
    tutorial: "Build the classic snake game! We'll use a grid-based approach where the snake moves one cell at a time. The key concepts are: storing snake segments in an array, detecting collisions with food and walls, and handling keyboard input for direction changes."
  },
  {
    id: "neural-networks-intro",
    title: "Neural Networks from Scratch",
    youtubeUrl: "https://www.youtube.com/watch?v=aircAruvnKk",
    videoId: "aircAruvnKk",
    creator: "The Coding Train",
    topics: ["javascript", "ai", "machine-learning"],
    publishedAt: "2026-02-05",
    tutorial: "An introduction to neural networks! We'll build a simple network with input, hidden, and output layers. Learn about forward propagation, activation functions (sigmoid, ReLU), and how to initialize weights and biases."
  },
  {
    id: " Conway's Game of Life",
    title: "Conway's Game of Life",
    youtubeUrl: "https://www.youtube.com/watch?v=ouipbDkwHWA",
    videoId: "ouipbDkwHWA",
    creator: "The Coding Train",
    topics: ["javascript", "simulation", "cellular-automata"],
    publishedAt: "2026-01-28",
    tutorial: "Implement Conway's Game of Life - a cellular automaton. The rules are simple: Any live cell with 2 or 3 live neighbors survives. Any dead cell with exactly 3 live neighbors becomes alive. All other live cells die. Use a 2D array to store the grid state."
  },
  {
    id: "maze-generator",
    title: "Recursive Backtracker Maze Generator",
    youtubeUrl: "https://www.youtube.com/watch?v=HyK_Q5rrcr4",
    videoId: "HyK_Q5rrcr4",
    creator: "The Coding Train",
    topics: ["javascript", "algorithm", "maze"],
    publishedAt: "2026-01-20",
    tutorial: "Generate perfect mazes using the recursive backtracking algorithm. Start at a cell, mark it as visited, then randomly choose an unvisited neighbor, remove the wall between them, and recursively continue. Backtrack when no unvisited neighbors remain."
  }
];

export default videos;
