package vn.edu.iuh.fit.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.models.Skill;
import vn.edu.iuh.fit.repositories.SkillRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class SkillService {
    @Autowired
    private SkillRepository skillRepository;
    public List<Skill> getAll(){
        return skillRepository.findAll();
    }
    public boolean create(Skill skill){
        skillRepository.save(skill);
        return true;
    }
}
