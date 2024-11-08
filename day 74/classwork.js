class books {
    constructor(name){
        this.name = name
    }
}
class book extends books{
    constructor(name){
        super(name)
    }
}

const book = new book('Harry Potter')

console.log(book)