// Dependencies 

const {sql, dbConnPoolPromise } = require("../database/db.js");

//model
const Member = require("../models/member.js");

// Define SQL statements here for use in function below
// These are parameterised queries note @named parameters.
// Input parameters are parsed and set before queries are executed
// for json path - Tell MSSQL to return results as JSON so that
// translation from resultset to object notation is not requires

const SQL_SELECT_ALL = 'SELECT * FROM Member ORDER BY sName ASC for json path;';

// for json path, without_array_wrapper - use for single json result
const SQL_SELECT_BY_ID = 'SELECT * FROM Member WHERE memberID = @id for json path, without_array_wrapper;';

// Second statement (Select...) returns inserted record identified by ProductId = SCOPE_IDENTITY()
const SQL_INSERT = 'INSERT INTO Member (memberID, fName, sName, hCap, memAddress, city, eircode, email) VALUES (@memberID, @fName, @sName, @hCap, @memAddress, @city, @eircode, @email); SELECT * from dbo.Member WHERE memberID = SCOPE_IDENTITY();';

const SQL_UPDATE = 'UPDATE Member SET memberID = @memberID, fName = @fName, hCap = @hCap, memAddress = @memAddress, city = @city, eircode = @eircode, email = @email WHERE memberID = @memberID; SELECT * FROM dbo.Member WHERE memberID = @memberID;';

const SQL_DELETE = 'DELETE FROM member WHERE memberID = @memberID;';

