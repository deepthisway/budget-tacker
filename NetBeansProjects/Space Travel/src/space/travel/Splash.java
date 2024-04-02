package space.travel;

import javax.swing.*;
import java.awt.*;  // give image class

// JFrame is a class in swing which lets us create frames
public class Splash extends JFrame implements Runnable {    // we could have extended Threads class also but multiple inheritance is not allowed in java.
       Thread thread;
       
    Splash() {
//        setSize(1200, 600);  // setting the size of the frame 
//        setLocation(200, 100);   // to set the default location of the frame on startup
        ImageIcon i1 = new ImageIcon(ClassLoader.getSystemResource("icons/splash.jpg"));

        Image i2 = i1.getImage().getScaledInstance(1200, 600, Image.SCALE_DEFAULT);    // resizing the image
        // before using i2 we have to convert it into a imageicon again;
        ImageIcon i3 = new ImageIcon(i2);
        JLabel image = new JLabel(i3);  // used to add image to a frame.
        add(image);
        setVisible(true);
        thread = new Thread(this);
        thread.start(); // start method internally calls run method;
//        run(); // to make it behave like multithreaded, we have to call run outside the class defination
        
    }
    
    
    public void run()   {
        
        try{
            Thread.sleep(4000);
            
            new Login();
            
        }
        catch(Exception e)  {
        }
        
    }
    public static void main(String[] args) {
        Splash frame1 = new Splash();   // as soon as the new object is created it's constructor is called, displaying the frame;

        int x = 1;
        for (int i = 0; i <= 500; x += 7, i += 6) {
            frame1.setLocation(750 - (x + i) / 2, 400 - (i / 2));
            frame1.setSize(x + i, i);

            try {
                Thread.sleep(10);
            } catch(Exception e){}
        }
    }
}
