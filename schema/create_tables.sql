drop table if exists LU_alignments
;--
create table LU_alignments (id varchar primary key, name text)
;
insert into LU_alignments values
('a1','Lawful Good'),
('a2','Neutral Good'),
('a3','Chaotic Good'),
('a4','Lawful Neutral'),
('a5','True Neutral'),
('a6','Chaotic Neutral'),
('a7','Lawful Evil'),
('a8','Neutral Evil'),
('a9','Chaotic Evil')
;
--
--
--
drop table if exists LU_stats
;--
create table LU_stats (id varchar primary key, name text)
;
insert into LU_stats values
('stat1','Strength'),
('stat2','Dexterity'),
('stat3','Constitution'),
('stat4','Intelligence'),
('stat5','Wisdom'),
('stat6','Charisma')
;
--
--
--
drop table if exists LU_races
;--
create table LU_races (id varchar primary key, name text, size text, speed text)
;
insert into LU_races values
('race1','Human', '500', '30ft'),
('race2','Dwarf', '500', '30ft'),
('race3','Elf', '500', '30ft'),
('race4','Gnome', '400', '30ft'),
('race5','Half-Elf', '500', '30ft'),
('race6','Half-Orc', '500', '30ft'),
('race7','Halfling', '400', '30ft')
;
--
--
--
drop table if exists race_stat_modifiers
;--
create table race_stat_modifiers (race_id varchar, stat_id varchar, modifier integer)
;
insert into race_stat_modifiers values
('race2','stat3', 2),
('race2','stat6', -2),
('race3','stat2', 2),
('race3','stat3', -2),
('race4','stat1', -2),
('race4','stat3', 2),
('race6','stat1', 2),
('race6','stat4', -2),
('race6','stat6', -2),
('race7','stat1', -2),
('race7','stat2', 2)
;

drop table if exists LU_sizes
;--
create table LU_sizes (id varchar primary key, name text, attack_ac_modifier integer, special_attacks_modifier integer, hide_modifier integer, height_or_length text, weight text, space text, natural_reach_tall text, natural_reach_long text)
;
insert into LU_sizes values
('100', 'Fine', 8, -16, 16, '6 in. or less', '1/8 lb. or less', '1/2 ft.', '0 ft.', '0 ft.'),
('200', 'Diminutive', 4, −12, 12, '6 in.–1 ft.', '1/8 lb.–1 lb.', '1 ft.', '0 ft.', '0 ft'),
('300', 'Tiny', 2, −8, 8, '1 ft.–2 ft.', '1 lb.–8 lb.', '2-1/2 ft.', '0 ft.', '0 ft.'),
('400', 'Small', 1, −4, 4, '2 ft.–4 ft.', '8 lb.–60 lb.', '5 ft.', '5 ft.', '5 ft.'),
('500', 'Medium', 0, 0, 0, '4 ft.–8 ft.', '60 lb.–500 lb. 5 ft. 5 ft.', '5 ft.'),
('600', 'Large', −1, 4, −4, '8 ft.–16 ft.', '500 lb.–2 tons', '10 ft.', '10 ft.', '5 ft.'),
('700', 'Huge', −2, 8, −8, '16 ft.–32 ft.', '2 tons–16 tons', '15 ft.', '15 ft.', '10 ft.'),
('800', 'Gargantuan', −4, 12, −12, '32 ft.–64 ft.', '16 tons–125 tons', '20 ft.', '20 ft.', '15 ft.'),
('900', 'Colossal', −8, 16, −16, '64 ft. or more', '125 tons or more', '30 ft.', '30 ft.', '20 ft.'),
('1000', 'Colossal+', −8, 16, −16, '64 ft. or more', '125 tons or more', '30 ft.', '30 ft.', '20 ft.')


-- heroku pg:reset HEROKU_POSTGRESQL_VIOLET --app minutaur
-- heroku pg:push mylocaldb HEROKU_POSTGRESQL_VIOLET --app minutaur
