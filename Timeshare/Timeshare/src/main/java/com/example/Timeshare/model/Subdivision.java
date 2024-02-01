package com.example.Timeshare.model;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.sql.Date;
import java.util.Collection;

@Entity
@Table(name = "Subdivision")

public class Subdivision {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String SubdivisionID;
    @Column(name = "Name")
    private String Name;
    @Column(name = "Description")
    @NotNull
    private String Description;
    @Column(name = "ImageLink")
    @NotNull
    private String ImageLink;
    @Column(name = "Create_date")
    @NotNull
    private Date Create_date;

    public Subdivision() {
    }

    public Subdivision(String subdivisionID, String name, String description, String imageLink, Date create_date) {
        SubdivisionID = subdivisionID;
        Name = name;
        Description = description;
        ImageLink = imageLink;
        Create_date = create_date;
    }

    public String getSubdivisionID() {
        return SubdivisionID;
    }

    public void setSubdivisionID(String subdivisionID) {
        SubdivisionID = subdivisionID;
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
    @OneToMany(mappedBy = "subdivisionID", cascade = CascadeType.ALL)
    private Collection<Timeshare> timeshares;
}
