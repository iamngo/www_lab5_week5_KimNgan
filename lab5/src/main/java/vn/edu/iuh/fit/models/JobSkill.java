package vn.edu.iuh.fit.models;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Table(name = "job_skill")
@Data
public class JobSkill implements Serializable {
    private SkillLevel skillLevel;
    @Id
    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;
    private String moreInfo;
    @Id
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    public JobSkill(SkillLevel skillLevel, Job job, String moreInfo, Skill skill) {
        this.skillLevel = skillLevel;
        this.job = job;
        this.moreInfo = moreInfo;
        this.skill = skill;
    }

    public JobSkill() {

    }
}
