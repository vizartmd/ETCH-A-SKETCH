const container = document.getElementById('container');
const newGrid = document.getElementById('newGrid');
const grid = document.getElementsByClassName('grid');
const refreshGrid = document.getElementById('refreshGrid');
const randomColorGrid = document.getElementById('randomColorGrid');
const blackColorGrid = document.getElementById('blackColorGrid');
const eraserGrid = document.getElementById('eraserGrid');
let gabarite = 600;
let randomColor = false;
let eraser = false;

function createGrid(x) {
    container.style.width = gabarite;
    container.style.height = gabarite;

    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            const div = document.createElement('div');
            div.className = "grid";
            container.appendChild(div);
        }
    }

    Array.prototype.forEach.call(grid, function(gr) {
        gr.style.width = gabarite/x;
        gr.style.height = gabarite/x;
    });
    
        for(let i = 0; i < grid.length; i++) {
            grid[i].addEventListener("mouseover", function(e) {
                if(randomColor) {
                    eraser = false;
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    e.target.style.backgroundColor = "#" + randomColor;
                } else if(eraser) {
                    randomColor = false;
                    e.target.style.backgroundColor = "white";
                } else {
                    e.target.style.backgroundColor = "black";
                }
            
        })
    }
}

function clearGrid() {
    container.innerHTML = '';
};

newGrid.addEventListener('click', function (e) {
    answer = prompt("How many squares per side? (max 150)");
    if(!answer || answer > 150) {
        return;
    }
    clearGrid();
    createGrid(answer);
});

refreshGrid.addEventListener('click', function () {
    for(let i = 0; i < grid.length; i++) {
        grid[i].style.backgroundColor = 'white';
    }
});

randomColorGrid.addEventListener('click', function () {
    randomColor = true;
    eraser = false;
});

eraserGrid.addEventListener('click', function () {
    randomColor = false;
    eraser = true;
});

blackColorGrid.addEventListener('click', function () {
    randomColor = false;
    eraser = false;
});



createGrid(20);