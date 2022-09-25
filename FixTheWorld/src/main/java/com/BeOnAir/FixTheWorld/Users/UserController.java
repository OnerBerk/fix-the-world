package com.BeOnAir.FixTheWorld.Users;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("fixTheWorld/")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Operation(description = "create a user")
    @RequestMapping(value = "/users", method = RequestMethod.POST)
    public ResponseEntity<User> save(@RequestBody User user) {
        try {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
