
function grid(v, c) {
    var g = document.body;
    for (var i = v; i >= 1; i--) {
        var grid = document.createElement("div");
        grid.className = "grid-container";
        for (var x = 3; x >= 1; x--) {
            var link = document.createElement("a");
            link.href = 'photos/' + c + '/' + ((i * 3) - x) + '.jpeg';

            var cell = document.createElement("div");
            cell.className = "grid-item";
            cell.id = ((i * 3) - x);

            // cell.innerText = cell.id;
            cell.style.backgroundImage = 'url(photos/' + c + '/' + cell.id + '.jpeg)';

            // cell.innerText =;
            //   ]cell.innerText = (i * v) + x;
            link.appendChild(cell);
            grid.appendChild(link);


        }
        g.appendChild(grid);
    }
}
