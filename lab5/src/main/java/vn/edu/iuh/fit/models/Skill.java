package vn.edu.iuh.fit.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "skill")
@Data
public class Skill implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skill_id")
    private long id;
    @Column(name = "skill_type")
    private SkillType type;
    @Column(name = "skill_name")
    private String skillName;
    @Column(name = "skill_desc")
    private String skillDescription;
    @OneToMany(mappedBy = "skill", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<JobSkill> jobSkills;

    public Skill(long id, SkillType type, String skillName, String skillDescription, List<JobSkill> jobSkills) {
        this.id = id;
        this.type = type;
        this.skillName = skillName;
        this.skillDescription = skillDescription;
        this.jobSkills = jobSkills;
    }

    public Skill() {

    }
}
