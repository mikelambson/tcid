import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Users(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	login = DB.Column(DB.String(40), unique=True);
	password = DB.Column(DB.String(400));
	protected = DB.Column(DB.Boolean);
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, login, password, protected, created_at, updated_at):
		self.login = login;
		self.password = password;
		self.protected = protected;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

		
