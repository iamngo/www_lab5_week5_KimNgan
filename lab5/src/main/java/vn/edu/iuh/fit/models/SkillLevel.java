package vn.edu.iuh.fit.models;

public enum SkillLevel {
    MASTER(0),
    BEGINER(1),
    ADVANCED(2),
    PROFESSIONAL(3),
    IMTERMEDIATE(4);

    private int skillLevel;

    SkillLevel(int i) {
    }

    public int getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(int skillLevel) {
        this.skillLevel = skillLevel;
    }
}
