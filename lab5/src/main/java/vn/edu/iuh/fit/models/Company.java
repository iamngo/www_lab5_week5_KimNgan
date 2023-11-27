package vn.edu.iuh.fit.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.List;
@Entity
@Table(name = "company")
@Data
@Component
public class Company implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "com_id")
    private long id;
    @Column(name = "comp_name")
    private String name;
    private String about;
    @OneToOne
    @JoinColumn(name = "address")
    private Address address;
    private String phone;
    @Column(name = "web_url")
    private String webURL;
    @OneToMany(mappedBy = "company", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Job> jobs;
    private String email;

    public Company(long id, String name, String about, Address address, String phone, String webURL, List<Job> jobs, String email) {
        this.id = id;
        this.name = name;
        this.about = about;
        this.address = address;
        this.phone = phone;
        this.webURL = webURL;
        this.jobs = jobs;
        this.email = email;
    }

    public Company() {

    }
}
