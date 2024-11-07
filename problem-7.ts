{

    // problem-7: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        make: string;
        model: string;
        year: number;
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            const currentYear: number = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

    const myCar = new Car("Toyota", "Camry", 2018);
    const carAge = myCar.getCarAge();

    console.log(`The car's age is: ${carAge} years`);
}