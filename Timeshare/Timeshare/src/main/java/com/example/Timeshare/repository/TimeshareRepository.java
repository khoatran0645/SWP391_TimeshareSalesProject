package com.example.Timeshare.repository;

import com.example.Timeshare.model.Timeshare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeshareRepository extends JpaRepository<Timeshare,String>{
}
