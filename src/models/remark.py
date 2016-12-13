import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Remark(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	order_id = DB.relationship(DB.Integer, DB.ForeignKey('order.id'));
	text = DB.Column(DB.Text);
	created_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, text, created_at, updated_at):
		self.text = text;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

