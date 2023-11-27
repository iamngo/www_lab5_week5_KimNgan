package vn.edu.iuh.fit.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.models.Job;
import vn.edu.iuh.fit.repositories.JobRepository;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public boolean create(Job job){
        jobRepository.save(job);
        return true;
    }
}
