import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;

class Deliveries(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	order_id = DB.relationship(DB.Integer, foreign_keys='order.id', lazy='dynamic'); #set lazy=dynamic to only load what is called for.
	child_id = DB.Column(DB.Integer);
	scheduled = DB.Column(DB.DateTime);
	start_time = DB.Column(DB.DateTime);
	start_user_id = DB.relationship(DB.Integer, foreign_keys='user.id');
	stop_time = DB.Column(DB.DateTime);
	stop_user_id = DB.relationship(DB.Integer, foreign_keys='user.id');
	status = DB.Column(DB.Tinyint(1));
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, child_id, schedule, start_time, stop_time, status, created_at, updated_at):
		self.child_id = child_id;
		self.scheduled = scheduled;
		self.start_time = start;
		self.stop_time = stop;
		self.status = status;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

