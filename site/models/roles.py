import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Roles(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	name = DB.Column(DB.String(20);
	district_id = DB.relationship(DB.Integer, DB.ForeignKey('district.id'));
	created_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);


	def __init__(self, name, created_at, updated_at):
		self.name = name;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

