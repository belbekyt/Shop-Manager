class Costumer{
    name: string;
    surname: string;
    city: string;
    street: string;
    country: string;
    sex: boolean;

    constructor(name: string, surname: string, city: string, street: string, country: string, sex: boolean){
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.street = street;
        this.country = country;
        this.sex = sex;
    }
}

const costumer1: Costumer = new Costumer("John", "Grace", "Oklahoma City", "Denver Road 123" ,"Canada", true);
const costumer2: Costumer = new Costumer("Garyy", "Gofley", "Toruń", "Chełmińska 126", "Poland", true);
const costumer3: Costumer = new Costumer("Ted", "James", "New York", "Cnady St. 223", "USA", true);
const costumer4: Costumer = new Costumer("Krystyna", "Okraska", "Gdańsk", "Aleje Grunwaldzkie 200", "Poland", false);
const costumer5: Costumer = new Costumer("Alice", "Barkson", "London", "Strwaberry Street 5", "UK", false);
const costumer6: Costumer = new Costumer("Eric", "Walker", "Munich", "Wurten Platz 23/1", "Germany", true);
const costumer7: Costumer = new Costumer("Frank", "Dals", "Marsylie", "Lovui 15", "France", true);
const costumer8: Costumer = new Costumer("Elizabeth", "Frankovic", "Vien", "San Elabo 6", "Austria", false);
const costumer9: Costumer = new Costumer("Francesco", "Dally", "Mediolan", "Cou Route 127/4", "Italy", true);
const costumer10: Costumer = new Costumer("Claudia", "Verone", "Brussel", "Klaus Platz 7/2", "Belgium", false);

export let costumers: object[] = [costumer1, costumer2, costumer3, costumer4, costumer5, costumer6, costumer7, costumer8, costumer9, costumer10];