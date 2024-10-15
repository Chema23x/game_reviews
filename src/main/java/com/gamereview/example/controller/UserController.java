package com.gamereview.example.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gamereview.dto.LoginRequest;
import com.gamereview.dto.ResponseMessage;
import com.gamereview.example.model.User;
import com.gamereview.example.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class UserController {
	

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
	
	@GetMapping
	 public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    	
    @PostMapping("/register")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        // Crear el usuario usando el servicio	
        User createdUser = userService.createUser(user);

        // Crear la URI para el nuevo recurso
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}") // Cambiar {username} por {id}
                .buildAndExpand(createdUser.getId()) // Usa el ID del nuevo usuario
                .toUri();

        // Retornar la respuesta 201 con la URI y el usuario creado
        return ResponseEntity.created(location).body(createdUser);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> getUser(@RequestBody LoginRequest loginRequest){
    	try {
            // Simula la búsqueda del usuario desde el servicio o repositorio
            User user = userService.getUser(loginRequest);
            
            ResponseMessage response = new ResponseMessage("Inicio de sesión exitoso, reedireccionando al home de la página");
             
            return ResponseEntity.status(HttpStatus.OK).body(response);

        } catch (IllegalArgumentException e) {
            // Manejo de error cuando el usuario no es encontrado o la contraseña es incorrecta
        	
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseMessage("Credenciales incorrectas, intente de nuevo"));
        } catch (Exception e) {
            // Manejo de cualquier otro error inesperado
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ResponseMessage("Lo sentimos, error inesperado"));
        }
    }	
	
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        try {
            User user = userService.updateUser(id, updatedUser);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

	
}
