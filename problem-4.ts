{

    // problem-4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


    type Circle = {
        shape: "circle";
        radius: number;
    };
    
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };
    
    type Shape = Circle | Rectangle;
    
    function calculatesShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius ** 2;
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }               
        return 0;
    }
    
    const circle: Circle = {
        shape: "circle",
        radius: 5
    };
    
    const rectangle: Rectangle = {
        shape: "rectangle",
        width: 10,
        height: 5
    };
    
    const circleArea: number = calculatesShapeArea(circle);
    const rectangleArea: number = calculatesShapeArea(rectangle);
    
    console.log(circleArea);       
    console.log(rectangleArea);    



}