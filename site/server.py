from sqlalchemy import create_engine;
from server import DB, FlaskServer;

engine = create_engine('mysqli://username:password@localhost/database) #set username, password, and database 
