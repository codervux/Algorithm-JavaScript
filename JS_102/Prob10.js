const readline = require("readline").createInterface({
    input: process.stdin,
    Xuat: process.stdout,
  });

  let inp = [];
  var n = -1;
  var m = -1;
  var t = -1;
  var count =1;
  var dRow = [-1, 0, 1, 0];
  var dCol = [0, 1, 0, -1];

  function Nhap(value) {
    inp.push(value.split(" "));
    if (n == -1)
    {
      m = Number(inp[0][0]);
      n = Number(inp[0][1] );
      inp.shift();
      t = m; 
    }
  
  }
  
  
  function isValid(row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n) return false;
    return true;
  }
  function BFS(grid, vis, row, col) {
    var q = [];
    q.push([row, col]);
    vis[row][col] = true;
    while (q.length != 0) {
      var cell = q[0];
      var x = cell[0];
      var y = cell[1];
      q.shift();
  
      // Go to the adjacent cells
      for (var i = 0; i < 4; i++) {
        var adjx = x + dRow[i];
        var adjy = y + dCol[i];
        if (isValid(adjx, adjy) && grid[adjx][adjy] == "-" && vis[adjx][adjy] == false) {
          q.push([adjx, adjy]);
          vis[adjx][adjy] = true;
        }
      }
    }
  }
readline.prependListener
readline.on("line", (value) => {
    if (!value)
    {
        readline.close();
        return;
    }
    Nhap(value);
    if (t == 0) {
        var temp=new Array(m);
        for(var i=0;i<m;i++) {
            temp[i]=new Array(n)
        }
        for(var i=0;i<m;i++) {
            temp[i]=Array.from(inp[i][0]);
        } 
        var dem=0;
        var vis = Array.from(Array(m), () => Array(n).fill(false));
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if (temp[i][j] == "-" && vis[i][j] == false) {
                    BFS(temp, vis, i, j);
                    dem++;
                }
            }
        }
        console.log(`Case ${count}: ${dem}`);
        n = -1
        inp = []
        count++;
    }
    t--;
});