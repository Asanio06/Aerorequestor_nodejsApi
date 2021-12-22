create table if not exists information_of_airac
(
    id            int auto_increment
        primary key,
    Countrie_code varchar(2)   null,
    AIRAC         varchar(20)  null,
    Date_begin    datetime     null,
    Date_end      datetime     null,
    Info1         varchar(255) null,
    Info2         varchar(255) null,
    Info3         varchar(255) null,
    Info4         varchar(255) null,
    createdAt     datetime     not null,
    updatedAt     datetime     not null
);

INSERT INTO requestapi.information_of_airac (id, Countrie_code, AIRAC, Date_begin, Date_end, Info1, Info2, Info3, Info4, createdAt, updatedAt) VALUES (1, 'FR', '2112', '2021-12-02 14:26:46', '2021-12-30 00:27:05', '02_DEC_2021', '2021-12-02', null, null, '2021-12-10 14:28:57', '2021-12-10 14:28:59');
