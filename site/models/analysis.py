import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Analysis(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	order_id = DB.relationship(DB.Integer, foreign_keys="order.id", lazy='dynamic');
	lateral_id = DB.relationship(DB.Integer, foreign_keys="laterals.id", lazy='dynamic');
	delivery_child_id = DB.relationship(DB.Integer, foreign_keys="deliveries.child_id", lazy='joined');
	start = DB.Column(DB.DateTime);
	stop = DB.Column(DB.DateTime);
	measured_cfs = DB.Column(DB.Float);
	total_af = DB.Column(DB.Float);
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, start, stop, measured_cfs, total_af, created_at,updated_at):
		self.start = start;
		self.stop = stop;
		self.total_af = total_af;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

