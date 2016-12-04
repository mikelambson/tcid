import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class DeliveryChecks(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	delivery_child_id = DB.relationship(DB.Integer, foreign_keys='deliveries.child_id'); 
	msrmnt = DB.Column(DB.Float);
	msrmnt_time = DB.Column(DB.DateTime);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, msrmnt, msrmnt_time, created_at, updated_at):
		self.msrmnt = msrmnt;
		self.msrmnt_time = msrmnt_time;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

