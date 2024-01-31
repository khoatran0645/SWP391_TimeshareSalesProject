package com.example.Timeshare.controller;

import com.example.Timeshare.model.Timeshare;
import com.example.Timeshare.service.ITimeshare;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/timeshare")
public class TimeshareController {
    @Autowired
    private ITimeshare iTimeshare;
    @GetMapping("/list")
    public List<Timeshare> getAllTimeshare(){

        return iTimeshare.getAllTimeshare();
    }
    @GetMapping("/get/{id}")
    public Timeshare getOneTimeshare(@PathVariable("TimeshareID") String TimeshareID){
        return iTimeshare.getOneTimeshare(TimeshareID);
    }
}
