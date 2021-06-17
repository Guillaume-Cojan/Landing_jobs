DROP TABLE IF EXISTS Landing_Jobs.subscribers;
CREATE TABLE Landing_Jobs.subscribers (
   id         INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,email      VARCHAR(225) NOT NULL
);