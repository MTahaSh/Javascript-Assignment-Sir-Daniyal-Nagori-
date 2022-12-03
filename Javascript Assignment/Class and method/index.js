class student{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;

    }

    print()
    {
        console.log("Student name: ", this.name);
        console.log("Student age: ", this.age);
    }

}

let st1 = new student("Taha",21)

st1.print();