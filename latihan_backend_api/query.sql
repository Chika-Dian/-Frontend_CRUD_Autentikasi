create table category (
    id Serial primary key,
    name varchar(255) not null
);

create table product (
    id Serial primary key,
    name varchar(255) not null,
    stock INT not null,
    price INT not null
);

INSERT INTO
    product ("name", "stock", "price")
VALUES ('kemeja', 15, 120000);

select name, stock, price from product;

update product
set
    "name" = 'celana panjang',
    "stock" = 20,
    price = 120000
where
    id = 4;

delete from product where id = 5;

-- category

insert into category ("name") values ('fashion');

select name from category;

update category set "name" = 'electronic' where id = 2;

delete from category where id = 3;

-- users

create table users (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    fullname varchar(255) not null,
    role varchar(255)
);

insert into
    users (
        "name",
        "password",
        "email",
        "role",
        "fullname"
    )
values (
        'john',
        'qwerty123',
        'admin@admin.com',
        'admin',
        'john aja'
    );