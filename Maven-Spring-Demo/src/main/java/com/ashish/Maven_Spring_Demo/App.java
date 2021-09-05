package com.ashish.Maven_Spring_Demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * First Maven Demo Application Core Java. Arch TYpe Selected is :- quickstart
 *       Youtube Tutorial - Telusko - https://www.youtube.com/watch?v=jdRd5hR9ON8
 *       https://www.youtube.com/watch?v=If1Lw4pLLEo
        
        // Adding dependency injection options
        // 1. Bean Factory  - ok for small applications
        // 2. ApplicationContext (recommended for web applications and enterprise applications)        
 */

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World ! First Maven Demo Application Core Java. Arch Type Selected is :- quickstart" );
        
        /*
        Car car = new Car();
        car.drive();
        
        Bike bike = new Bike();
        bike.drive(); 
        */
        
        ApplicationContext context = new ClassPathXmlApplicationContext("spring_config.xml");
        Vehicle obj = (Vehicle) context.getBean("vehicle");
        obj.drive();
        
    }
    
}
