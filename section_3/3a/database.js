require("dotenv").config();
const mysql = require("mysql");
const Validator = require("jsonschema").Validator;

const validator = new Validator();
