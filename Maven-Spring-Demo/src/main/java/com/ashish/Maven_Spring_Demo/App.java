package com.ashish.Maven_Spring_Demo;
/**
 * Hello world!
 * 
 * 
 * First Maven Demo Application Core Java. Arch TYpe Selected is :- quickstart
 * 
 */

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World ! First Maven Demo Application Core Java. Arch Type Selected is :- quickstart" );
        
        Car car = new Car();
        car.drive();
        
        Bike bike = new Bike();
        bike.drive();                
        
        
    }
    
}
