package com.example.Timeshare.service;

import com.example.Timeshare.model.Timeshare;

import java.util.List;

public interface ITimeshare {
    public List<Timeshare> getAllTimeshare();
    public Timeshare getOneTimeshare(String TimeshareID);
}
