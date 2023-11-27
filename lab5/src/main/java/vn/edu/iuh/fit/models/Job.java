package vn.edu.iuh.fit.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "job")
@Data
public class Job implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private long id;
    @Column(name = "job_name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "company")
    private Company company;
    @OneToMany(mappedBy = "job", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<JobSkill> jobSkills;
    @Column(name = "job_desc")
    private String description;

    public Job(long id, String name, Company company, List<JobSkill> jobSkills, String description) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.jobSkills = jobSkills;
        this.description = description;
    }

    public Job(long id, String name, Company company, String description) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.description = description;
    }

    public Job() {

    }
}
