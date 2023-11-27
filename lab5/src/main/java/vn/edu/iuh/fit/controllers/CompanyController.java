package vn.edu.iuh.fit.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.models.*;
import vn.edu.iuh.fit.services.CandidateService;
import vn.edu.iuh.fit.services.CompanyService;
import vn.edu.iuh.fit.services.JobService;
import vn.edu.iuh.fit.services.SkillService;

import java.util.List;

@RestController
@RequestMapping("/company")
@CrossOrigin(origins = "*")
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    @Autowired
    private CandidateService candidateService;
    @Autowired
    private JobService jobService;
    @Autowired
    private SkillService skillService;

    @GetMapping("/{id}")
    public Company getByID(@PathVariable("id") long id){
        return companyService.getByID(id);
    }

    @GetMapping("get-page/{page}")
    public ResponseEntity<ResponseCompany> getAll(@PathVariable("page") int page){
        Pageable pageable = (Pageable) PageRequest.of(page, 4);
        return ResponseEntity.status(HttpStatus.OK).body(
                companyService.getAll(pageable)
        );
    }

    @GetMapping("get-info/{id}")
    public ResponseEntity<List<ResponseInfo>> getInfo(@PathVariable("id") long id){
        return ResponseEntity.status(HttpStatus.OK).body(
                companyService.getInfo(id)
        );
    }

    @PostMapping("get-skill-candidate")
    public ResponseEntity<List<ResponseInfo>> getSkillCandidate(@RequestBody RequestSkillCandidate requestSkillCandidate){
        return ResponseEntity.status(HttpStatus.OK).body(
                companyService.getSkillCandidate(requestSkillCandidate.getCandidateID(), requestSkillCandidate.getCompanyID())
        );
    }

    @PostMapping("create-job")
    public boolean create(@RequestBody Job job){
        jobService.create(job);
        return true;
    }
    @GetMapping("get-all-skill")
    public List<Skill> getAll(){
        return skillService.getAll();
    }

    @PostMapping("create-skill")
    public boolean create(@RequestBody Skill skill){
        skillService.create(skill);
        return true;
    }
}
