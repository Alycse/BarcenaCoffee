-- MySQL Script generated by MySQL Workbench
-- Sun Jan 19 02:06:28 2020
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
  `PantryId` CHAR(36) NOT NULL,
  `PantryName` NVARCHAR(45) NULL,
  `CoffeeBeanUnits` INT UNSIGNED NOT NULL,
  `SugarUnits` INT UNSIGNED NOT NULL,
  `MilkUnits` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`PantryId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BarcenaCoffee`.`Drink`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `BarcenaCoffee`.`Drink` ;

CREATE TABLE IF NOT EXISTS `BarcenaCoffee`.`Drink` (
  `DrinkId` CHAR(36) NOT NULL,
  `DrinkImageFileName` NVARCHAR(180) NULL,
  `DrinkName` NVARCHAR(45) NULL,
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
  `OrderId` CHAR(36) NOT NULL,
  `DrinkId` CHAR(36) NOT NULL,
  `PantryId` CHAR(36) NULL,
  `OrderDate` DATETIME NOT NULL,
  PRIMARY KEY (`OrderId`),
  INDEX `fk_Order_Drink_idx` (`DrinkId` ASC) VISIBLE,
  INDEX `fk_Order_Pantry1_idx` (`PantryId` ASC) VISIBLE,
  CONSTRAINT `fk_Order_Drink`
    FOREIGN KEY (`DrinkId`)
    REFERENCES `BarcenaCoffee`.`Drink` (`DrinkId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_Pantry`
    FOREIGN KEY (`PantryId`)
    REFERENCES `BarcenaCoffee`.`Pantry` (`PantryId`)
    ON DELETE SET NULL
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
INSERT INTO `BarcenaCoffee`.`Pantry` (`PantryId`, `PantryName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES ('c6066eb0-53ca-43e1-97aa-3c2169eec659', 'Pantry A', 45, 45, 45);
INSERT INTO `BarcenaCoffee`.`Pantry` (`PantryId`, `PantryName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES ('96a8bf25-ce6d-40e9-93cf-2d62724fb463', 'Pantry B', 30, 30, 30);

COMMIT;


-- -----------------------------------------------------
-- Data for table `BarcenaCoffee`.`Drink`
-- -----------------------------------------------------
START TRANSACTION;
USE `BarcenaCoffee`;
INSERT INTO `BarcenaCoffee`.`Drink` (`DrinkId`, `DrinkImageFileName`, `DrinkName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES ('24fd81f8-d58a-4bcc-9f35-dc6cd5641906', 'double-americano.png', 'Double Americano', 3, 0, 0);
INSERT INTO `BarcenaCoffee`.`Drink` (`DrinkId`, `DrinkImageFileName`, `DrinkName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES ('261e1685-cf26-494c-b17c-3546e65f5620', 'sweet-latte.png', 'Sweet Latte', 2, 5, 3);
INSERT INTO `BarcenaCoffee`.`Drink` (`DrinkId`, `DrinkImageFileName`, `DrinkName`, `CoffeeBeanUnits`, `SugarUnits`, `MilkUnits`) VALUES ('f98e4d74-0f68-4aac-89fd-047f1aaca6b6', 'flat-white.png', 'Flat White', 2, 1, 4);

COMMIT;

