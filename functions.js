const container = document.querySelector('#grid-container')

    function createGrid(rows=16) {
        //delete old grid
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        //create rows*cols number of squares
        for(let i=0; i<rows*rows; i++ ) {
            let newDiv =  document.createElement('div');
            newDiv.className = 'square';
            container.appendChild(newDiv);
        }
        //set the number of columns in css
        container.style.gridTemplateColumns = 'auto '.repeat(rows)
    }

    createGrid() //initial grid set up
    const squares = document.getElementsByClassName('square')

    for (let i=0; i<squares.length; i++) {
        squares[i].addEventListener('mouseenter', function() {
            squares[i].style.background = 'black';
        }) 
    }

    function resetGrid() {
        let rows = 0
        while (isNaN(rows) || rows > 100 || rows <1) {
            rows = prompt('How many rows/columns do you want the grid? (e.g. entering 10 will result in a 10x10 grid)');
        }
        createGrid(rows);
        for  (let i=0; i<squares.length; i++) {
            squares[i].style.background = 'white';
            squares[i].addEventListener('mouseenter', function() {
                squares[i].style.background = 'black';});
        } 
    }