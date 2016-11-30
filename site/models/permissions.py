import datetime, re;
from sqlalchemy.orm import validates;
from server import DB, FlaskServer;


class Permissions(DB.Model):
	id = DB.Column(DB.Integer, primary_key=True, autoincrement=True);
	schedule_orders = DB.Column(DB.Integer(20));
	manage_user = DB.Column(DB.Integer(20));
	manage_role	= DB.Column(DB.Integer(20));
	manage_orders = DB.Column(DB.Integer(20));
	update_orders = DB.Column(DB.Integer(20));
	view_orders = DB.Column(DB.Integer(20));
	created_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	created_at = DB.Column(DB.DateTime);
	updated_by = DB.Column(DB.Integer, DB.ForeignKey('users.id'));
	updated_at = DB.Column(DB.DateTime, nullable=True);


	def __init__(self, schedule_orders, manage_user, manage_role, manage_orders, update_orders, view_orders, created_at, updated_at):
		self.schedule_orders = schedule_orders;
		self.manage_user = manage_user;
		self.manage_role = manage_role;
		self.manage_orders = manage_orders;
		self.update_orders = update_orders;
		self.view_orders = view_orders;
		self.created_at = datetime.datetime.now();
		self.updated_at = self.created_at;

