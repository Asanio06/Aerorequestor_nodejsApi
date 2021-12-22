create table if not exists Chart_of_airport
(
    id           int auto_increment
        primary key,
    ICAO_AIRPORT varchar(4)   null,
    Chart_type   varchar(10)  null,
    Chart_name   varchar(255) null,
    Chart_url    varchar(255) null
);

