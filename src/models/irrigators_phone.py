import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Irrigators_phone(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	irrigator_id = DB.relationship(DB.Integer, DB.ForeignKey('irrigators.id'), lazy='joined');
	phone_id = DB.relationship(DB.Integer, DB.ForeignKey('phones.id'), lazy='joined');
	primary_phone = DB.Column(DB.Boolean);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, primary_phone, created_at, updated_at):
		self.primary_phone = primary_phone;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

