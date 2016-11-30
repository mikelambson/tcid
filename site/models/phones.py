import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Phones(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	phone = DB.Column(DB.String(20));
	created_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, phone, created_at, updated_at):
		self.phone = phone;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

