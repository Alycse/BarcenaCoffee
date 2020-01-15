-- MySQL Script generated by MySQL Workbench
-- Wed Jan 15 20:16:57 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema BarcenaCoffee
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BarcenaCoffee
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BarcenaCoffee` DEFAULT CHARACTER SET utf8 ;
USE `BarcenaCoffee` ;

-- -----------------------------------------------------
-- Table `BarcenaCoffee`.`Pantry`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `BarcenaCoffee`.`Pantry` ;

CREATE TABLE IF NOT EXISTS `BarcenaCoffee`.`Pantry` (
  `PantryId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `CoffeeBeanBagAmount` INT UNSIGNED NOT NULL,
  `SugarPackAmount` INT UNSIGNED NOT NULL,
  `MilkCartonAmount` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`PantryId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BarcenaCoffee`.`Drink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `BarcenaCoffee`.`Drink` ;

CREATE TABLE IF NOT EXISTS `BarcenaCoffee`.`Drink` (
  `DrinkId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `DrinkName` VARCHAR(45) NULL,
  `CoffeeBeanUnits` INT UNSIGNED NOT NULL,
  `SugarUnits` INT UNSIGNED NOT NULL,
  `MilkUnits` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`DrinkId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BarcenaCoffee`.`Order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `BarcenaCoffee`.`Order` ;

CREATE TABLE IF NOT EXISTS `BarcenaCoffee`.`Order` (
  `OrderId` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Drink_DrinkId` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`OrderId`),
  INDEX `fk_Order_Drink_idx` (`Drink_DrinkId` ASC) VISIBLE,
  CONSTRAINT `fk_Order_Drink`
    FOREIGN KEY (`Drink_DrinkId`)
    REFERENCES `BarcenaCoffee`.`Drink` (`DrinkId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `BarcenaCoffee`.`Pantry`
-- -----------------------------------------------------
START TRANSACTION;
USE `BarcenaCoffee`;
INSERT INTO `BarcenaCoffee`.`Pantry` (`PantryId`, `CoffeeBeanBagAmount`, `SugarPackAmount`, `MilkCartonAmount`) VALUES (1, 3, 3, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `BarcenaCoffee`.`Drink`
-- -----------------------------------------------------
START TRANSACTION;
USE `BarcenaCoffee`;
INSERT INTO `BarcenaCoffee`.`Drink` (`DrinkId`, `DrinkName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES (1, 'Double Americano', 3, 0, 0);
INSERT INTO `BarcenaCoffee`.`Drink` (`DrinkId`, `DrinkName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES (2, 'Sweet Latte', 2, 5, 3);
INSERT INTO `BarcenaCoffee`.`Drink` (`DrinkId`, `DrinkName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES (3, 'Flat White', 2, 1, 4);

COMMIT;

