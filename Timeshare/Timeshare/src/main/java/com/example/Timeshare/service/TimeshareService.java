package com.example.Timeshare.service;

import com.example.Timeshare.model.Timeshare;
import com.example.Timeshare.repository.TimeshareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class TimeshareService implements ITimeshare{
    @Autowired
    private TimeshareRepository timeshareRepository;
    @Override
    public List<Timeshare> getAllTimeshare() {

        return timeshareRepository.findAll();
    }
    @Override
    public Timeshare getOneTimeshare(String TimeshareID) {

        return timeshareRepository.getById(TimeshareID);
    }
}
