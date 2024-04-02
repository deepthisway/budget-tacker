package space.travel;

import javax.swing.*;
import java.awt.*;


public class Login extends JFrame {
    
    Login() {
        setSize(900, 400);
        setLocation(350,200);
        setLayout(null);
        //panel class is used to create the panel inside this new box.
        
        JPanel loginPanel = new JPanel();
        loginPanel.setBackground(new Color(131,193,223));
        loginPanel.setBounds(0, 0, 400, 400);
        
        add(loginPanel);
        
        setVisible(true);
        
    }
    
    public static void main(String[] args)  {
        new Login();
        
    }
}

