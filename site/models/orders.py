import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Orders(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	order_no = DB.Column(DB.Integer);
	serial_id = DB.relationship(DB.Integer, DB.ForeignKey('serial.id'), lazy='joined');
	approx_cfs = DB.Column(DB.Float);
	approx_hrs = DB.Column(DB.Float);
	approx_af = DB.Column(DB.Float);
	district_id = DB.relationship(DB.Integer, DB.ForeignKey('district.id'));
	order_time = DB.Column(DB.DateTime);
	balance = DB.Column(DB.Float);
	adjust = DB.Column(DB.String(20), nullable=True);
	pending_analysis = DB.Column(DB.Boolean);
	created_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.relationship(DB.Integer, DB.ForeignKey('users.id'), nullable=True);
	updated_at = DB.Column(DB.DateTime, nullable=True);

	def __init__(self, order_no, approx_cfs, approx_hrs, approx_af, order_time, balance, adjust, pending_analysis, created_at,updated_at):
		self.order_no = order_no;
		self.approx_cfs = approx_cfs;
		self.approx_hrs = approx_hrs;
		self.approx_af = approx_af;
		self.order_time = order_time;
		self.balance = balance;
		self.adjust = adjust;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

