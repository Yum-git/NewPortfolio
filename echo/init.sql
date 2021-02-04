CREATE DATABASE PortFolioDB;

USE PortFolioDB;

CREATE TABLE productdata(
	id bigint(8) AUTO_INCREMENT, 
	title varchar(50), 
	progress varchar(100), 
	contents varchar(200), 
	picture_path varchar(100), 
	tecnology_front varchar(100), 
	tecnology_back varchar(100), 
	tecnology_infra varchar(100), 
	link varchar(200), 
	index(id));
	
CREATE TABLE skilldata(
	id bigint(8) AUTO_INCREMENT,
	skill_name varchar(100),
	index(id));
	
CREATE TABLE skilllibrarydata(
	skill_name varchar(100),
	skill_library_name varchar(100));

CREATE TABLE userdata(
	id bigint(8) AUTO_INCREMENT,
	username varchar(100),
	password varchar(200),
	index(id));