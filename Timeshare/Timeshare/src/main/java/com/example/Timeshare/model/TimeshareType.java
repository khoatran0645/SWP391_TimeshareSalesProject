package com.example.Timeshare.model;

import jakarta.persistence.*;

import java.util.Collection;

@Entity
@Table(name = "TimeshareType")

public class TimeshareType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String TypeID;
    @Column(name = "Name")
    private String Name;

    public TimeshareType() {
    }

    public TimeshareType(String typeID, String name) {
        TypeID = typeID;
        Name = name;
    }

    public String getTypeID() {
        return TypeID;
    }

    public void setTypeID(String typeID) {
        TypeID = typeID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
    @OneToMany(mappedBy = "typeID", cascade = CascadeType.ALL)
    private Collection<Timeshare> timeshares;
}
