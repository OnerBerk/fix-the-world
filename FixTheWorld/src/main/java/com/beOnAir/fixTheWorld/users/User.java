package com.beOnAir.fixTheWorld.users;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.beOnAir.fixTheWorld.roles.Role;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

@Entity // annotation obligatoire aux classe Entity
@Table(name = "ftw_users") // Definition du nom de la table lié

public class User {
    @Id  // définis l'id comme primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // generate value autogénéré la cle primaire
    private Long id;

    @Column(name = "version", nullable = false, updatable = false)
    private BigDecimal version;

    @Column(name = "user_firstname", nullable = false, updatable = false, length = 45)
    private String userFirstname;

    @Column(name = "user_lastname", nullable = false, updatable = false, length = 45)
    private String userLastname;

    @Column(name = "user_nickname", updatable = true, length = 45)
    private String userNickname;

    @Column(name = "user_email", updatable = true, length = 45)
    private String userEmail;

    @Column(name = "user_Password", updatable = true, length = 45)
    private String userPassword;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    //@column define le nom de la column sai on ne met pas la column prendra le nom du field
    private Date createdAt;

    @CreationTimestamp
    @Column(name = "updated_at", nullable = false, updatable = false)
    private Date updatedAt;


    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    public void addRole(Role role) {
        this.roles.add(role);
    }

    public User() {}

    public User(Long id, BigDecimal version, String userFirstname, String userLastname, String userNickname, String userEmail, String userPassword, Date createdAt, Date updatedAt, Set<Role> roles) {
        this.id = id;
        this.version = version;
        this.userFirstname = userFirstname;
        this.userLastname = userLastname;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getVersion() {
        return version;
    }

    public void setVersion(BigDecimal version) {
        this.version = version;
    }

    public String getUserFirstname() {
        return userFirstname;
    }

    public void setUserFirstname(String userFirstname) {
        this.userFirstname = userFirstname;
    }

    public String getUserLastname() {
        return userLastname;
    }

    public void setUserLastname(String userLastname) {
        this.userLastname = userLastname;
    }

    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
