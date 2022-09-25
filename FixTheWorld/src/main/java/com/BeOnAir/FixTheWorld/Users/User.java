package com.BeOnAir.FixTheWorld.Users;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

@Entity // annotation obligatoire aux classe Entity
@Table(name = "ftw_users") // Definition du nom de la table lié
@Setter  // lombok crée les setters
@Getter //lombok crée les getters
@ToString
public class User {
    @Id  // définis l'id comme primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // generate value autogénéré la cle primaire
    private Long id;
    private String user_name;
    private String user_email;
    private String user_password;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false) //@column define le nom de la column sai on ne met pas la column prendra le nom du field
    private Date create_at;

    @CreationTimestamp
    @Column(name = "updated_at", nullable = false, updatable = false)
    private Date update_at;


}
