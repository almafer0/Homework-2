class Workers {
    #id;
    constructor(fullName,age,position,salary,comment){
    this.fullName = fullName || '';
    this.age = age || 0;
    this.position = position || '';
    this.salary = salary || 0;
    this.comment = comment || '';
    this.#id = Math.floor(Math.random()*1e7);
    }
    get id(){
        return this.id;
    }
    set id(value){
        if(value > 0){
           this.id = value;
        }
        else{console.log("Error")};
    }
}

const WORKER_ADMIN = new Workers('Зенаида Петровна Хуст',62,'Администратор',15000,'Бившый десантник, принимала участие в военом перевороте в Уганде, Сомали.')
const WORKER_SALESMAN = new Workers();

console.log(WORKER_ADMIN);
console.log(WORKER_SALESMAN);

WORKER_ADMIN.id = 10000001;
console.log(WORKER_ADMIN);