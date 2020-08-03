CREATE DEFINER=`node`@`localhost` PROCEDURE `InsertComment`( 
					IN vText VARCHAR(255), 
                    IN vDate DATE)
BEGIN
	INSERT INTO comment (text, date) VALUES (vText, vDate);
END