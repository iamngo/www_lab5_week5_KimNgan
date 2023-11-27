package vn.edu.iuh.fit.models;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Table(name = "candidate_skill")
@Data
public class CandidateSkill implements Serializable {
    @Column(name = "skill_level")
    private SkillLevel skillLevel;
    @Id
    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;
    @Id
    @ManyToOne
    @JoinColumn(name = "can_id")
    private Candidate candidate;
    @Column(name = "more_infos")
    private String moreInfo;

    public CandidateSkill(SkillLevel skillLevel, Skill skill, Candidate candidate, String moreInfo) {
        this.skillLevel = skillLevel;
        this.skill = skill;
        this.candidate = candidate;
        this.moreInfo = moreInfo;
    }

    public CandidateSkill() {

    }
}
