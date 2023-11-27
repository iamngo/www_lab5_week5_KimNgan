package vn.edu.iuh.fit.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
@Entity
@Table(name = "candidate")
@Data
public class Candidate implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "can_id")
    private long id;
    private String phone;
    private LocalDate dob;
    private String email;
    @Column(name = "full_name")
    private String fullName;
    @OneToOne
    @JoinColumn(name = "address")
    private Address address;
    @OneToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<CandidateSkill> candidateSkills;
    @OneToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Experience> experiences;

    public Candidate(long id, String phone, LocalDate dob, String email, String fullName, Address address, List<CandidateSkill> candidateSkills, List<Experience> experiences) {
        this.id = id;
        this.phone = phone;
        this.dob = dob;
        this.email = email;
        this.fullName = fullName;
        this.address = address;
        this.candidateSkills = candidateSkills;
        this.experiences = experiences;
    }


    public Candidate() {

    }
}
