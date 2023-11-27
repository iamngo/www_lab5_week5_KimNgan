package vn.edu.iuh.fit.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.neovisionaries.i18n.CountryCode;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Table(name = "address")
@Data
public class Address implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "add_id")
    private long id;
    private String city;
    private CountryCode country;
    private String zipCode;
    private String street;
    @OneToOne(mappedBy = "address", fetch = FetchType.LAZY)
    @JsonIgnore
    private Candidate candidate;
    private String number;
    @OneToOne(mappedBy = "address", fetch = FetchType.LAZY)
    @JsonIgnore
    private Company company;


    public Address(long id, String city, CountryCode country, String zipCode, String street, Candidate candidate, String number, Company company) {
        this.id = id;
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
        this.street = street;
        this.candidate = candidate;
        this.number = number;
        this.company = company;
    }

    public Address() {

    }
}
