let server = new Server("https://jsonplaceholder.typicode.com/posts");
let result = server.ApiCall(printTable);

function printTable(data){
    let table = new Table(data, "result");
     table.drawTable();
     table.animateRows();
 }

//let table = new Table(data, "result");
//table.drawTable();

$('.form-check-input').on("change", (event) =>{
        let filter = new TableFilter("gender", event.target.value, "eq");
        table.filter(filter);
});
