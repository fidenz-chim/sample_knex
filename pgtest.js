const { Pool, Client } = require('pg')

const client = new Client({
    user: 'chim',
    host: 'localhost',
    database: 'chim',
    password: '',
    port: 5432,
})

console.log(process.argv[2]);

Actions(process.argv[2]);

function Actions(task)
{
    switch(task) {
    case "clear":
        clearData();
        break;
    case "insert":
        insertData();
        break;
    default:
        listData();
    }
}


function listData()
{
    client.connect()
    client.query('SELECT * FROM public.t03', (err, res) => {
      console.log(res.rows)
      client.end()
    })
}

function insertData()
{
    client.connect()
    var d  = new Date();
    client.query("INSERT INTO public.t02 (c01, c02) VALUES(44,'sss')")
    client.end()
}

function clearData()
{
    client.connect()
    var d  = new Date();
    client.query("DELETE FROM public.knex_migrations", (err, res) => {
      console.log(err, res)
    })

    client.query("DELETE FROM public.knex_migrations_lock", (err, res) => {
      console.log(err, res)
    })

    client.query("DROP TABLE public.t03", (err, res) => {
      console.log(err, res)
      client.end()
    })
}
