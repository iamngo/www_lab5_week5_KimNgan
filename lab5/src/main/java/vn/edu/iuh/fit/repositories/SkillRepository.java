package vn.edu.iuh.fit.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.models.Company;
import vn.edu.iuh.fit.models.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
}
