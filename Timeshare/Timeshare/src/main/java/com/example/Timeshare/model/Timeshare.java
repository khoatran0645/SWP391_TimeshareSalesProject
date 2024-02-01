package com.example.Timeshare.model;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.sql.Date;
@Entity
@Table(name = "Timeshare")
public class Timeshare {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private String TimeshareID;
    @Column(name = "Name")
    @NotNull
    private String Name;
    @Column(name = "Description")
    private String Description;
    @Column(name = "Area")
    @NotNull
    private String Area;
    @Column(name = "PricePerSquare")
    @NotNull
    private float PricePerSquare;
    @Column(name = "ImageLink")
    private String ImageLink;
    @Column(name = "Status")
    @NotNull
    private String Status;
    @ManyToOne
    @JoinColumn(name = "ProjectID")
    @NotNull
    private Project projectID;
    @ManyToOne
    @JoinColumn(name = "subdivisionid", nullable = false, foreignKey = @ForeignKey(name = "fk_subdivision"))
    private Subdivision subdivisionID;
    @ManyToOne
    @JoinColumn(name = "TypeID")
    @NotNull
    private TimeshareType typeID;
    @Column(name = "IsOpenningForSale")
    private boolean IsOpenningForSale;
    @Column(name = "Create_date")
    private Date Create_date;

    public Timeshare() {
    }

    public Timeshare(String timeshareID, String name, String description, String area, float pricePerSquare, String imageLink, String status, Project projectID, Subdivision subdivisionID, TimeshareType typeID, boolean isOpenningForSale, Date create_date) {
        TimeshareID = timeshareID;
        Name = name;
        Description = description;
        Area = area;
        PricePerSquare = pricePerSquare;
        ImageLink = imageLink;
        Status = status;
        this.projectID = projectID;
        this.subdivisionID = subdivisionID;
        this.typeID = typeID;
        IsOpenningForSale = isOpenningForSale;
        Create_date = create_date;
    }

    public String getTimeshareID() {
        return TimeshareID;
    }

    public void setTimeshareID(String timeshareID) {
        TimeshareID = timeshareID;
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

    public String getArea() {
        return Area;
    }

    public void setArea(String area) {
        Area = area;
    }

    public float getPricePerSquare() {
        return PricePerSquare;
    }

    public void setPricePerSquare(float pricePerSquare) {
        PricePerSquare = pricePerSquare;
    }

    public String getImageLink() {
        return ImageLink;
    }

    public void setImageLink(String imageLink) {
        ImageLink = imageLink;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public Project getProjectID() {
        return projectID;
    }

    public void setProjectID(Project projectID) {
        this.projectID = projectID;
    }

    public Subdivision getSubdivisionID() {
        return subdivisionID;
    }

    public void setSubdivisionID(Subdivision subdivisionID) {
        this.subdivisionID = subdivisionID;
    }

    public TimeshareType getTimeshareType() {
        return typeID;
    }

    public void setTimeshareType(TimeshareType typeID) {
        this.typeID = typeID;
    }

    public boolean isOpenningForSale() {
        return IsOpenningForSale;
    }

    public void setOpenningForSale(boolean openningForSale) {
        IsOpenningForSale = openningForSale;
    }

    public Date getCreate_date() {
        return Create_date;
    }

    public void setCreate_date(Date create_date) {
        Create_date = create_date;
    }
}
