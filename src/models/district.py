import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class District(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	name = DB.Column(DB.String(20));
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, name, created_at, updated_at):
		self.name = name;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

