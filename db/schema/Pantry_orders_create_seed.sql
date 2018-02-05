CREATE TABLE Pantry_Orders (
    ID SERIAl,
    User_ID integer REFERENCES Pantry_User_info(ID),
    Size varchar(255),
    Duration varchar(255)
);