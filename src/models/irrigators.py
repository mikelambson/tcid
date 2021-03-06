import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Irrigators(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	name = DB.Column(DB.String(40));
	notation = DB.Column(DB.Text);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, name, notation, created_at, updated_at):
		self.name = name;
		self.notation = notation;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

