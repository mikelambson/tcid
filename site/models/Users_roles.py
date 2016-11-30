import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class User_roles(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	user_id = DB.Column(DB.Integer, DB.ForeignKey('user.id'));
	role_id = DB.Column(DB.Integer, DB.ForeignKey('roles.id'));
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);
		
