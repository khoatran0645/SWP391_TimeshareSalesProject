package com.example.Timeshare.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Collection;

@Entity
@Table(name = "Project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String ProjectID;
    @Column(name = "Name")
    private String Name;
    @Column(name = "Description")
    private String Description;
    @Column(name = "Location")
    private String Location;
    @Column(name = "ImageLink")
    private String ImageLink;
    @Column(name = "Create_date")
    private Date Create_date;

    public Project() {
    }

    public Project(String projectID, String name, String description, String location, String imageLink, Date create_date) {
        ProjectID = projectID;
        Name = name;
        Description = description;
        Location = location;
        ImageLink = imageLink;
        Create_date = create_date;
    }

    public String getProjectID() {
        return ProjectID;
    }

    public void setProjectID(String projectID) {
        ProjectID = projectID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getImageLink() {
        return ImageLink;
    }

    public void setImageLink(String imageLink) {
        ImageLink = imageLink;
    }

    public Date getCreate_date() {
        return Create_date;
    }

    public void setCreate_date(Date create_date) {
        Create_date = create_date;
    }
    @OneToMany(mappedBy = "projectID", cascade = CascadeType.ALL)
    private Collection<Timeshare> timeshares;
}
