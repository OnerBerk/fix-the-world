create table if not exists ftw_users
(
    id               bigserial
        constraint pk_news primary key,
    version          int       not null,
    created_at       timestamp not null,
    updated_at       timestamp not null,
    user_name        text not null,
    user_email       text not null ,
    user_password    text not null
);