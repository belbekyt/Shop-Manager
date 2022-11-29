class Costumer{
    name: string;
    surname: string;
    city: string;
    country: string;
    sex: boolean;

    constructor(name: string, surname: string, city: string, country: string, sex: boolean){
        this.name = name;
        this.surname = surname;
        this.city = city;
        this.country = country;
        this.sex = sex;
    }
}

const costumer1: Costumer = new Costumer("John", "Grace", "Oklahoma City", "Canada", true);

let costumers: object[] = [costumer1];