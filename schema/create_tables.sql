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
drop table if exists LU_abilities
;--
create table LU_abilities (id varchar primary key, name text)
;
insert into LU_abilities values
('ability1','Strength'),
('ability2','Dexterity'),
('ability3','Constitution'),
('ability4','Intelligence'),
('ability5','Wisdom'),
('ability6','Charisma')
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
drop table if exists race_ability_modifiers
;--
create table race_ability_modifiers (race_id varchar, ability_id varchar, modifier integer)
;
insert into race_ability_modifiers values
('race2','ability3', 2),
('race2','ability6', -2),
('race3','ability2', 2),
('race3','ability3', -2),
('race4','ability1', -2),
('race4','ability3', 2),
('race6','ability1', 2),
('race6','ability4', -2),
('race6','ability6', -2),
('race7','ability1', -2),
('race7','ability2', 2)
;
--
--
--
drop table if exists LU_sizes
;--
create table LU_sizes (id varchar primary key, name text, attack_ac_modifier integer, special_attacks_modifier integer, hide_modifier integer, height_or_length text, weight text, space text, natural_reach_tall text, natural_reach_long text)
;
insert into LU_sizes values
('100', 'Fine', 8, -16, 16, '6 in. or less', '1/8 lb. or less', '1/2 ft.', '0 ft.', '0 ft.'),
('200', 'Diminutive', 4, -12, 12, '6 in.–1 ft.', '1/8 lb.–1 lb.', '1 ft.', '0 ft.', '0 ft'),
('300', 'Tiny', 2, -8, 8, '1 ft.–2 ft.', '1 lb.–8 lb.', '2-1/2 ft.', '0 ft.', '0 ft.'),
('400', 'Small', 1, -4, 4, '2 ft.–4 ft.', '8 lb.–60 lb.', '5 ft.', '5 ft.', '5 ft.'),
('500', 'Medium', 0, 0, 0, '4 ft.–8 ft.', '60 lb.–500 lb.', '5 ft.', '5 ft.', '5 ft.'),
('600', 'Large', -1, 4, -4, '8 ft.–16 ft.', '500 lb.–2 tons', '10 ft.', '10 ft.', '5 ft.'),
('700', 'Huge', -2, 8, -8, '16 ft.–32 ft.', '2 tons–16 tons', '15 ft.', '15 ft.', '10 ft.'),
('800', 'Gargantuan', -4, 12, -12, '32 ft.–64 ft.', '16 tons–125 tons', '20 ft.', '20 ft.', '15 ft.'),
('900', 'Colossal', -8, 16, -16, '64 ft. or more', '125 tons or more', '30 ft.', '30 ft.', '20 ft.'),
('1000', 'Colossal+', -8, 16, -16, '64 ft. or more', '125 tons or more', '30 ft.', '30 ft.', '20 ft.')
;
--
--
--
drop table if exists LU_skills
;
create table LU_skills (id varchar, name varchar, abilityId varchar, is_untrained boolean)
;
insert into LU_skills values
('sk1','Appraise', 'ability4', true),
('sk2','Autohypnosis', 'ability5', true),
('sk3','Balance', 'ability2', true),
('sk4','Bluff', 'ability6', true),
('sk5','Climb', 'ability1', true),
('sk6','Concentration', 'ability3', true),
('sk7','Control Shape', 'ability5', true),
('sk8','Craft', 'ability4', true),
('sk9','Decipher Script', 'ability4', false),
('sk10','Diplomacy', 'ability6', true),
('sk11','Disable Device', 'ability4', false),
('sk12','Disguise', 'ability6', true),
('sk13','Escape Artist', 'ability2', true),
('sk14','Forgery', 'ability4', true),
('sk15','Gather Information', 'ability6', true),
('sk16','Handle Animal', 'ability6', false),
('sk17','Heal', 'ability5', true),
('sk18','Hide', 'ability2', true),
('sk19','Intimidate', 'ability6', true),
('sk20','Jump', 'ability1', true),
('sk21','Knowledge', 'ability4', false),
('sk22','Listen', 'ability5', true),
('sk23','Move Silently', 'ability2', true),
('sk24','Open Lock', 'ability2', false),
('sk25','Perform', 'ability6', true),
('sk26','Psicraft', 'ability4', true),
('sk27','Profession', 'ability5', false),
('sk28','Ride', 'ability2', true),
('sk29','Search', 'ability4', true),
('sk30','Sense Motive', 'ability5', true),
('sk31','Sleight of Hand', 'ability2', false),
('sk32','Speak Language', '(none)', true),
('sk33','Spellcraft', 'ability4', false),
('sk34','Spot', 'ability5', true),
('sk35','Survival', 'ability5', true),
('sk36','Swim', 'ability1', true),
('sk37','Tumble', 'ability2', false),
('sk38','Use Magic Device', 'ability6', false),
('sk39','Use Psionic Device', 'ability6', true),
('sk40','Use Rope', 'ability2', true)
;
--
--
--
drop table if exists LU_levels
;
create table LU_levels (id varchar, name varchar, xp integer, skill_max integer, bonus_feat boolean, ability_score_increase boolean)
;
insert into LU_levels values
('lvl1', '1',	0,		4,	true,	false),
('lvl2', '2',	1000,	5,	false,	false),
('lvl3', '3',	3000,	6,	true,	false),
('lvl4', '4',	6000,	7,	false,	true),
('lvl5', '5',	10000,	8,	false,	false),
('lvl6', '6',	15000,	9,	true,	false),
('lvl7', '7',	21000,	10,	false,	false),
('lvl8', '8',	28000,	11,	false,	true),
('lvl9', '9',	36000,	12,	true,	false),
('lvl10', '10',	45000,	13,	false,	false),
('lvl11', '11',	55000,	14,	false,	false),
('lvl12', '12',	66000,	15,	true,	true),
('lvl13', '13',	78000,	16,	false,	false),
('lvl14', '14',	91000,	17,	false,	false),
('lvl15', '15',	105000,	18,	true,	false),
('lvl16', '16',	120000,	19,	false,	true),
('lvl17', '17',	136000,	20,	false,	false),
('lvl18', '18',	153000,	21,	true,	false),
('lvl19', '19',	171000,	22,	false,	false),
('lvl20', '20',	190000,	23,	false,	true)
;
--
--
--
drop table if exists LU_classes
;
create table LU_classes (id varchar, name varchar, allowed_alignments varchar, type varchar, value varchar, hit_die integer, initial_skill_modifier integer, level_skill_modifier integer)
;
insert into LU_classes values
('c1', 'Barbarian', 'any non-lawful', 'core', 'barbarian', 12, 4, 4 ),
('c2', 'Bard', 'any non-lawful', 'core', 'bard', 6, 6, 6 ),
('c3', 'Cleric', '1 step from deity', 'core', 'cleric', 6, 2, 2 ),
('c4', 'Druid', 'Neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil', 'core', 'druid', 8, 4, 4 ),
('c5', 'Fighter', 'any', 'core', 'fighter', 10, 2, 2  ),
('c6', 'Monk', 'any lawful', 'core', 'monk', 8, 4, 4 ),
('c7', 'Paladin', 'lawful good', 'core', 'paladin', 10, 2, 2 ),
('c8', 'Ranger', 'any', 'core', 'ranger', 8, 6, 6 ),
('c9', 'Rogue', 'any', 'core', 'rogue', 6, 8, 8 ),
('c10', 'Sorceror', 'any', 'core', 'sorceror', 4, 2, 2 ),
('c11', 'Wizard', 'any lawful', 'core', 'wizard', 4, 2, 2)
;
--
--
--
drop table if exists LU_class_skills
;
create table LU_class_skills (class_id varchar, skill_id varchar)
;
insert into LU_class_skills values
('c1', 'sk5'),
('c1', 'sk8'),
('c1', 'sk16'),
('c1', 'sk19'),
('c1', 'sk20'),
('c1', 'sk22'),
('c1', 'sk28'),
('c1', 'sk35'),
('c1', 'sk36'),
('c2', 'sk1'),
('c2', 'sk3'),
('c2', 'sk4'),
('c2', 'sk5'),
('c2', 'sk6'),
('c2', 'sk8'),
('c2', 'sk9'),
('c2', 'sk10'),
('c2', 'sk12'),
('c2', 'sk13'),
('c2', 'sk15'),
('c2', 'sk18'),
('c2', 'sk20'),
('c2', 'sk21'),
('c2', 'sk22'),
('c2', 'sk23'),
('c2', 'sk25'),
('c2', 'sk27'),
('c2', 'sk30'),
('c2', 'sk31'),
('c2', 'sk32'),
('c2', 'sk33'),
('c2', 'sk36'),
('c2', 'sk37'),
('c2', 'sk38'),
('c3', 'sk6'),
('c3', 'sk8'),
('c3', 'sk10'),
('c3', 'sk17'),
('c3', 'sk21'),
('c3', 'sk27'),
('c3', 'sk33'),
('c4', 'sk6'),
('c4', 'sk8'),
('c4', 'sk10'),
('c4', 'sk16'),
('c4', 'sk17'),
('c4', 'sk21'),
('c4', 'sk22'),
('c4', 'sk27'),
('c4', 'sk28'),
('c4', 'sk33'),
('c4', 'sk34'),
('c4', 'sk35'),
('c4', 'sk36'),
('c5', 'sk5'),
('c5', 'sk8'),
('c5', 'sk16'),
('c5', 'sk19'),
('c5', 'sk20'),
('c5', 'sk28'),
('c5', 'sk36'),
('c6', 'sk3'),
('c6', 'sk5'),
('c6', 'sk6'),
('c6', 'sk8'),
('c6', 'sk10'),
('c6', 'sk13'),
('c6', 'sk18'),
('c6', 'sk20'),
('c6', 'sk21'),
('c6', 'sk22'),
('c6', 'sk23'),
('c6', 'sk25'),
('c6', 'sk27'),
('c6', 'sk30'),
('c6', 'sk34'),
('c6', 'sk36'),
('c6', 'sk37'),
('c7', 'sk6'),
('c7', 'sk8'),
('c7', 'sk10'),
('c7', 'sk16'),
('c7', 'sk17'),
('c7', 'sk21'),
('c7', 'sk27'),
('c7', 'sk28'),
('c7', 'sk30'),
('c8', 'sk5'),
('c8', 'sk6'),
('c8', 'sk8'),
('c8', 'sk16'),
('c8', 'sk17'),
('c8', 'sk18'),
('c8', 'sk20'),
('c8', 'sk21'),
('c8', 'sk22'),
('c8', 'sk23'),
('c8', 'sk27'),
('c8', 'sk28'),
('c8', 'sk29'),
('c8', 'sk34'),
('c8', 'sk35'),
('c8', 'sk36'),
('c8', 'sk40'),
('c9', 'sk1'),
('c9', 'sk3'),
('c9', 'sk4'),
('c9', 'sk5'),
('c9', 'sk8'),
('c9', 'sk9'),
('c9', 'sk10'),
('c9', 'sk11'),
('c9', 'sk12'),
('c9', 'sk13'),
('c9', 'sk14'),
('c9', 'sk15'),
('c9', 'sk18'),
('c9', 'sk19'),
('c9', 'sk20'),
('c9', 'sk21'),
('c9', 'sk22'),
('c9', 'sk23'),
('c9', 'sk24'),
('c9', 'sk25'),
('c9', 'sk27'),
('c9', 'sk29'),
('c9', 'sk30'),
('c9', 'sk31'),
('c9', 'sk34'),
('c9', 'sk36'),
('c9', 'sk37'),
('c9', 'sk38'),
('c9', 'sk40'),
('c10', 'sk6'),
('c10', 'sk8'),
('c10', 'sk9'),
('c10', 'sk21'),
('c10', 'sk27'),
('c10', 'sk33'),
('c11', 'sk6'),
('c11', 'sk8'),
('c11', 'sk9'),
('c11', 'sk21'),
('c11', 'sk27'),
('c11', 'sk33')
;
--
--
--
drop table if exists LU_class_levels
;
create table LU_class_levels (class_id varchar, level_id varchar, base_attack_bonus integer, fortitude_save integer, reflex_save integer, will_save integer)
;
insert into LU_class_levels values
('c1', 'lvl1', 2, 2, 0, 0),
('c1', 'lvl2', 3, 3, 0, 0),
('c2', 'lvl1', 0, 0, 2, 2),
('c2', 'lvl2', 0, 0, 3, 3),
('c3', 'lvl1', 0, 2, 0, 2),
('c3', 'lvl2', 1, 3, 0, 3),
('c4', 'lvl1', 0, 2, 0, 2),
('c4', 'lvl2', 1, 3, 0, 3),
('c5', 'lvl1', 1, 2, 0, 0),
('c5', 'lvl2', 2, 3, 0, 0),
('c6', 'lvl1', 0, 2, 2, 2),
('c6', 'lvl2', 1, 3, 3, 3),
('c7', 'lvl1', 1, 2, 0, 0),
('c7', 'lvl2', 2, 3, 0, 0),
('c8', 'lvl1', 1, 2, 2, 0),
('c8', 'lvl2', 2, 3, 3, 0),
('c9', 'lvl1', 0, 0, 2, 0),
('c9', 'lvl2', 1, 0, 3, 0),
('c10', 'lvl1', 1, 0, 0, 2),
('c10', 'lvl2', 1, 0, 0, 3),
('c11', 'lvl1', 0, 0, 0, 2),
('c11', 'lvl2', 1, 0, 0, 3)
;
--
--
-- connect to DB with: heroku pg:psql --app dnd-character-gen-server
-- \i [path/to]/schema/create_tables.sql
--                                       ;
-- heroku pg:reset HEROKU_POSTGRESQL_VIOLET --app minutaur
-- heroku pg:push mylocaldb HEROKU_POSTGRESQL_VIOLET --app minutaur
