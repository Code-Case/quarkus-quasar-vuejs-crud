insert into Users
    ("id", firstName, lastName, emailAdress, userRole)
values
    (1, 'Alpha', 'Beta', 'a.b@gmail.com', 'Administrator');


insert into Users
    ("id", firstName, lastName, emailAdress, userRole)
values
    (2, 'Some', 'OtherUser', 'testuser@web.de', 'Editor');


insert into Users
    ("id", firstName, lastName, emailAdress, userRole)
values
    (3, 'Another', 'Testuser', 'anothertestuser@web.de', 'User');

insert into Users
    ("id", firstName, lastName, emailAdress, userRole)
values
    (4, 'John', 'Doe', 'john.doe@web.de', 'User');

insert into Users
    ("id", firstName, lastName, emailAdress, userRole)
values
    (5, 'Jane', 'Doe', 'jane.doe@web.de', 'User');


select setval('hibernate_sequence', 5, true);
