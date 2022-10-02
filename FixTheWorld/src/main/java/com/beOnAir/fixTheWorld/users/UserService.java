package com.beOnAir.fixTheWorld.users;

import com.beOnAir.fixTheWorld.roles.Role;
import com.beOnAir.fixTheWorld.roles.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

}
