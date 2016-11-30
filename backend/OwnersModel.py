import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;
from components.validation import validate_word;

class Owners(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	name = DB.Column(DB.Varchar(80));
	phone_id = DB.Column(DB.Integer, DB.ForeignKey('phones.id'));
	notation = DB.Column(DB.Text, nullable=True);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, name, mailing_address, city, state, zip, notation, created_at, updated_at):
		self.name = name;
		self.mailing_address = mailing_address;
		self.city = city;
		self.state = state;
		self.zip = zip;
		self.notation = notation;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

