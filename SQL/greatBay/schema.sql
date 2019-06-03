create database greatbay_DB;
use greatbay_DB;

create table auctions (
	id INT NOT NULL auto_increment,
    item_name varchar(50) not null, 
    category varchar(50) not null,
    starting_bid int default 0,
    highest_bid int default 0,
    primary key (id)

);

