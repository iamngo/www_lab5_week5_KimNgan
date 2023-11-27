package vn.edu.iuh.fit.models;

public enum SkillType {
    SOFT_SKILL(0),
    UNSPECIFIC(1),
    TECHNICAL_SKILL(2);
    private int skillType;

    SkillType(int skillType) {
        this.skillType = skillType;
    }

    public int getSkillType() {
        return skillType;
    }

    public void setSkillType(int skillType) {
        this.skillType = skillType;
    }
}
