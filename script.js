let companies = 
`[
    {
        "name" : "Corporation A",
        "number_of_employees" : 150,
        "ceo" : "Mary",
        "rating": 3.6
    },

    {
        "name" : "Corporation B",
        "number_of_employees" : 3,
        "ceo" : null,
        "rating": 4.2
    }
]`
console.log(JSON.parse(companies)[0].name) //Pegando só o nome da primeira corporação