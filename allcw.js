//function main() {
    //problem1();
// problem2();
// problem3();
// problem4();

//}





//function problem1() {

   // let arr =[cat, dog, frog];

  //  var userInput =prompt("");

   // for(i = 0; i<arr; i++);

   // console.log(arr[i]);

//};






function problem2 () {
var words = prompt("Translate English to spanish")
    switch(words){
        case "Hello":
            console.log("Hola");
            break;
        case "Money":
            console.log("Dinero");
            break;
        case "Happiness":
            console.log("Felicidad");
            break;
        case "Sadness":
            console.log("Tristeza");
            break;
        case "Pretty":
            console.log("Bonita");
            break;
    }


}








//function problem3() {

//}




//problem3();





function problem4() {
    class Books {
        constructor(name, rating, genre, author) {
            this.name = name;
            this.rating = rating;
            this.genre = genre;
            this.author = author;
        };

        changeRating(newRating) {
            this.rating = newRating;
        }
    }

    var myBook = new Books("Tears of A Tiger ", 10, "Drama ", "Sharon M Draper ")
    mybook.changeRating("9.9 ");
    console.log(myBook.name + "" + myBook.rating + "" + myBook.genre + "" + myBook.author);
}
problem4();








//problem4();
// main();
